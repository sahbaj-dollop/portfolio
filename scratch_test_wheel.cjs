const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  let killed = false;
  const cleanup = () => {
    if (!killed) {
      killed = true;
      try { chrome.kill(); } catch (e) {}
    }
  };
  process.on('exit', cleanup);

  try {
    let version = null;
    for (let i = 0; i < 20; i++) {
      try {
        version = await fetchJson('http://127.0.0.1:9222/json/version');
        if (version) break;
      } catch (e) {
        await wait(250);
      }
    }

    const targets = await fetchJson('http://127.0.0.1:9222/json/list');
    const page = targets.find(t => t.type === 'page') || targets[0];
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = msg => {
      const data = JSON.parse(msg.data);
      if (data.id && callbacks.has(data.id)) {
        callbacks.get(data.id)(data);
        callbacks.delete(data.id);
      }
    };

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    const send = (method, params = {}) => {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        callbacks.set(msgId, res => {
          if (res.error) reject(new Error(res.error.message));
          else resolve(res.result);
        });
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Input.setIgnoreInputEvents', { ignore: false });
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });

    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await wait(2500);

    // ================= TEST EXPERIENCE =================
    await send('Runtime.evaluate', {
      expression: `document.getElementById('experience')?.scrollIntoView({ behavior: 'instant' });`
    });
    await wait(500);

    const expInit = (await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('#experience .scroll-stack');
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2, scrollTop: el.scrollTop, scrollHeight: el.scrollHeight, clientHeight: el.clientHeight, windowY: window.scrollY };
      })()`,
      returnByValue: true
    })).result.value;
    console.log('Experience initial:', expInit);

    // Initial screenshot of experience
    const shotExp0 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(__dirname, 'test_exp_init.png'), Buffer.from(shotExp0.data, 'base64'));

    // Wheel 5 ticks (scrolling down inside experience stack)
    for (let i = 0; i < 5; i++) {
      await send('Input.dispatchMouseEvent', {
        type: 'mouseWheel',
        x: Math.round(expInit.x),
        y: Math.round(expInit.y),
        deltaX: 0,
        deltaY: 100
      });
      await wait(60);
    }

    const expMid = (await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('#experience .scroll-stack');
        return { scrollTop: el.scrollTop, windowY: window.scrollY };
      })()`,
      returnByValue: true
    })).result.value;
    console.log('Experience mid (windowY should be UNCHANGED):', expMid);

    // Wheel 8 more ticks to reach bottom and stack Card 2
    for (let i = 0; i < 8; i++) {
      await send('Input.dispatchMouseEvent', {
        type: 'mouseWheel',
        x: Math.round(expInit.x),
        y: Math.round(expInit.y),
        deltaX: 0,
        deltaY: 100
      });
      await wait(60);
    }

    const expStacked = (await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('#experience .scroll-stack');
        return { scrollTop: el.scrollTop, maxScroll: el.scrollHeight - el.clientHeight, windowY: window.scrollY };
      })()`,
      returnByValue: true
    })).result.value;
    console.log('Experience stacked (at bottom):', expStacked);

    const shotExpStacked = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(__dirname, 'test_exp_stacked.png'), Buffer.from(shotExpStacked.data, 'base64'));

    // ================= TEST PROJECTS =================
    await send('Runtime.evaluate', {
      expression: `document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });`
    });
    await wait(500);

    const projInit = (await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('#projects .scroll-stack');
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2, scrollTop: el.scrollTop, scrollHeight: el.scrollHeight, clientHeight: el.clientHeight, windowY: window.scrollY };
      })()`,
      returnByValue: true
    })).result.value;
    console.log('Projects initial:', projInit);

    const shotProj0 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(__dirname, 'test_proj_init.png'), Buffer.from(shotProj0.data, 'base64'));

    // Click "Next card" button on the floating controller
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btns = document.querySelectorAll('#projects .scroll-stack__btn');
        // second button is Next
        if (btns[1]) btns[1].click();
      })()`
    });
    await wait(600);

    const projAfterClick = (await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('#projects .scroll-stack');
        const counter = document.querySelector('#projects .scroll-stack__counter')?.textContent;
        return { scrollTop: el.scrollTop, counter, windowY: window.scrollY };
      })()`,
      returnByValue: true
    })).result.value;
    console.log('Projects after clicking Next button:', projAfterClick);

    const shotProjStep2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(__dirname, 'test_proj_step2.png'), Buffer.from(shotProjStep2.data, 'base64'));

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    cleanup();
  }
}

run();
