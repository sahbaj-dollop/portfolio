'use client';

import { Children, Fragment, isValidElement, useLayoutEffect, useRef, useState, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './ScrollStack.css';

const resolveOffset = (value, size) => {
  if (typeof value === 'number') return value;
  const text = String(value).trim();
  if (text.endsWith('%')) return (parseFloat(text) / 100) * size;
  return parseFloat(text) || 0;
};

const toLength = value => (typeof value === 'number' ? `${value}px` : value);

export const ScrollStackItem = ({ children, itemClassName = '', style }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()} style={style}>
    {children}
    <span className="scroll-stack-card__shade" aria-hidden="true" />
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemStackDistance = 24,
  stackPosition = '15%',
  itemScale = 0.05,
  baseScale = 0.8,
  dimAmount = 0.2,
  blurAmount = 0,
  tiltAmount = 0,
  rotationAmount = 0,
  holdDistance = 200,
  smoothScroll = true,
  snap = false,
  useWindowScroll = false,
  showControls = true,
  itemLabel = 'Card',
  onStackComplete,
  onActiveIndexChange
}) => {
  const rootRef = useRef(null);
  const innerRef = useRef(null);
  const endRef = useRef(null);
  const settingsRef = useRef(null);
  const scheduleRef = useRef(null);
  const scrollPointsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = Children.toArray(children);
  const totalItems = items.length;

  useLayoutEffect(() => {
    settingsRef.current = {
      itemDistance,
      itemStackDistance,
      stackPosition,
      itemScale,
      baseScale,
      dimAmount,
      blurAmount,
      tiltAmount,
      rotationAmount,
      holdDistance,
      smoothScroll,
      snap,
      onStackComplete,
      onActiveIndexChange
    };
    scheduleRef.current?.();
  });

  useLayoutEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    const end = endRef.current;
    if (!root || !inner || !end) return undefined;

    const windowed = useWindowScroll;
    const target = windowed ? window : root;
    const cache = new Map();
    let frame = 0;
    let complete = false;
    let points = [];
    let touchStartY = 0;

    const readScroll = () => (windowed ? window.scrollY : root.scrollTop);
    const maxScroll = () =>
      windowed ? document.documentElement.scrollHeight - window.innerHeight : root.scrollHeight - root.clientHeight;

    const write = (key, value, apply) => {
      if (cache.get(key) === value) return false;
      cache.set(key, value);
      apply(value);
      return true;
    };

    const update = () => {
      frame = 0;
      const settings = settingsRef.current;
      const slots = Array.from(inner.children).filter(child => child.hasAttribute('data-stack-slot'));
      if (!settings || !slots.length) return;

      const viewHeight = windowed ? window.innerHeight : root.clientHeight;
      const viewTop = windowed ? 0 : root.getBoundingClientRect().top + root.clientTop;
      const stackTop = resolveOffset(settings.stackPosition, viewHeight);
      const offset = settings.itemStackDistance;
      const heights = slots.map(slot => slot.offsetHeight);
      const tops = slots.map(slot => slot.getBoundingClientRect().top);
      const lastPin = stackTop + (slots.length - 1) * offset;
      const padTop = windowed ? 0 : stackTop;
      const endHeight =
        settings.holdDistance + (windowed ? 0 : Math.max(0, viewHeight - lastPin - (heights[heights.length - 1] || 0)));

      let moved = write('padTop', padTop, value => {
        inner.style.paddingTop = `${value}px`;
      });
      moved =
        write('endHeight', endHeight, value => {
          end.style.height = `${value}px`;
        }) || moved;

      let flow = inner.getBoundingClientRect().top - viewTop + readScroll() + padTop;
      points = heights.map((height, i) => {
        const point = flow - stackTop - i * offset;
        flow += height + settings.itemDistance;
        return point;
      });
      scrollPointsRef.current = points;

      const depths = slots.map(() => 0);
      let lastCover = 0;
      for (let j = 1; j < slots.length; j++) {
        const pinBefore = viewTop + stackTop + (j - 1) * offset;
        const start = pinBefore + heights[j - 1];
        const span = Math.max(1, start - pinBefore - offset);
        const cover = Math.min(1, Math.max(0, (start - tops[j]) / span));
        for (let i = 0; i < j; i++) depths[i] += cover;
        lastCover = cover;
      }

      // Calculate active card index based on current scroll position
      const currentScroll = readScroll();
      let bestIdx = 0;
      let minDiff = Infinity;
      points.forEach((pt, idx) => {
        const diff = Math.abs(currentScroll - pt);
        if (diff < minDiff) {
          minDiff = diff;
          bestIdx = idx;
        }
      });
      setActiveIndex(bestIdx);
      settings.onActiveIndexChange?.(bestIdx);

      const dimStep = Math.min(Math.max(settings.dimAmount, 0), 1);
      slots.forEach((slot, i) => {
        const card = slot.firstElementChild;
        if (!card) return;
        const depth = depths[i];
        const lean = Math.min(depth, 1);
        const scale = Math.max(Math.min(settings.baseScale, 1), 1 - depth * settings.itemScale);
        const tilt = -lean * settings.tiltAmount;
        const turn = lean * settings.rotationAmount * (i % 2 ? -1 : 1);
        const blur = depth * settings.blurAmount;
        const dim = 1 - Math.pow(1 - dimStep, depth);
        const transform =
          depth < 0.0005
            ? ''
            : `perspective(1200px) rotateX(${tilt.toFixed(2)}deg) rotate(${turn.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
        write(`transform${i}`, transform, value => {
          card.style.transform = value;
        });
        write(`filter${i}`, blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : '', value => {
          card.style.filter = value;
        });
        write(`dim${i}`, dim.toFixed(3), value => {
          card.style.setProperty('--scroll-stack-dim', value);
        });
      });

      const done = slots.length > 1 && lastCover >= 0.999;
      if (done !== complete) {
        complete = done;
        if (done) settings.onStackComplete?.();
      }

      if (moved) schedule();
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onScroll = () => {
      schedule();
    };

    const onWheel = event => {
      if (event.ctrlKey) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      if (!windowed) {
        const currentScroll = root.scrollTop;
        const max = maxScroll();
        const delta = event.deltaY;
        const isAtTop = currentScroll <= 2;
        const isAtBottom = currentScroll >= max - 2;

        if (delta > 0) {
          // Scrolling DOWN
          if (!isAtBottom) {
            // Strictly trap wheel inside this stack until all cards have stacked!
            event.preventDefault();
            event.stopPropagation();
            root.scrollTop = Math.min(max, currentScroll + delta);
          } else {
            // All cards have stacked! Hand off scroll directly to window without jerky smooth animation
            window.scrollBy(0, delta);
          }
        } else if (delta < 0) {
          // Scrolling UP
          if (!isAtTop) {
            // Strictly trap wheel inside this stack until cards have fully unstacked!
            event.preventDefault();
            event.stopPropagation();
            root.scrollTop = Math.max(0, currentScroll + delta);
          } else {
            // Reached the first card! Hand off scroll directly to window
            window.scrollBy(0, delta);
          }
        }
      }
    };

    const onTouchStart = event => {
      if (event.touches.length === 1) {
        touchStartY = event.touches[0].clientY;
      }
    };

    const onTouchMove = event => {
      if (!touchStartY || windowed) return;
      const currentY = event.touches[0].clientY;
      const delta = touchStartY - currentY;
      const currentScroll = root.scrollTop;
      const max = maxScroll();
      const isAtTop = currentScroll <= 2;
      const isAtBottom = currentScroll >= max - 2;

      if (delta > 0 && !isAtBottom) {
        event.preventDefault();
        root.scrollTop = Math.min(max, currentScroll + delta);
        touchStartY = currentY;
      } else if (delta < 0 && !isAtTop) {
        event.preventDefault();
        root.scrollTop = Math.max(0, currentScroll + delta);
        touchStartY = currentY;
      }
    };

    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    observer.observe(inner);
    target.addEventListener('scroll', onScroll, { passive: true });
    target.addEventListener('wheel', onWheel, { passive: false });
    root.addEventListener('touchstart', onTouchStart, { passive: true });
    root.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('resize', schedule);
    scheduleRef.current = schedule;
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      target.removeEventListener('scroll', onScroll);
      target.removeEventListener('wheel', onWheel);
      root.removeEventListener('touchstart', onTouchStart);
      root.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', schedule);
      scheduleRef.current = null;
    };
  }, [useWindowScroll]);

  const scrollToCard = useCallback((targetIndex) => {
    const root = rootRef.current;
    if (!root) return;
    const clamped = Math.max(0, Math.min(totalItems - 1, targetIndex));
    const pts = scrollPointsRef.current;
    const targetScroll = pts[clamped] ?? (clamped * ((root.scrollHeight - root.clientHeight) / Math.max(1, totalItems - 1)));
    root.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
  }, [totalItems]);

  return (
    <div className={`scroll-stack-wrapper relative w-full h-full ${className}`.trim()}>
      <div
        ref={rootRef}
        className={`scroll-stack ${useWindowScroll ? 'scroll-stack--window' : 'scroll-stack--contained'}`.trim()}
      >
        <div ref={innerRef} className="scroll-stack__inner">
          {items.map((child, index) => {
            const gap = itemDistance - (items.length - index) * itemStackDistance;
            return (
              <Fragment key={isValidElement(child) ? (child.key ?? index) : index}>
                {index > 0 && (
                  <div aria-hidden="true" style={{ height: Math.max(0, gap), marginTop: Math.min(0, gap) }} />
                )}
                <div
                  data-stack-slot=""
                  className="scroll-stack__slot"
                  style={{
                    top: `calc(${toLength(stackPosition)} + ${index * itemStackDistance}px)`,
                    marginBottom: (items.length - 1 - index) * itemStackDistance,
                    zIndex: index + 1
                  }}
                >
                  {child}
                </div>
              </Fragment>
            );
          })}
          <div ref={endRef} className="scroll-stack__end" aria-hidden="true" />
        </div>
      </div>

      {showControls && totalItems > 1 && (
        <div className="scroll-stack__controls" role="region" aria-label="Card navigation">
          <span className="scroll-stack__counter">
            {itemLabel} {activeIndex + 1} of {totalItems}
          </span>
          <div className="scroll-stack__dots">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                className={`scroll-stack__dot ${i === activeIndex ? 'is-active' : ''}`}
                aria-label={`Go to ${itemLabel.toLowerCase()} ${i + 1}`}
              />
            ))}
          </div>
          <div className="scroll-stack__arrows">
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() => scrollToCard(activeIndex - 1)}
              className="scroll-stack__btn"
              aria-label="Previous card"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              disabled={activeIndex === totalItems - 1}
              onClick={() => scrollToCard(activeIndex + 1)}
              className="scroll-stack__btn"
              aria-label="Next card"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollStack;
