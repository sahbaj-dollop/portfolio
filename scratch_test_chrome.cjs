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
    // Wait for Chrome to start
    let version = null;
    for (let i = 0; i < 20; i++) {
      try {
        version = await fetchJson('http://127.0.0.1:9222/json/version');
        if (version) break;
      } catch (e) {
        await wait(250);
      }
    }
    console.log('Chrome started:', version?.Browser);

    const targets = await fetchJson('http://127.0.0.1:9222/json/list');
    const page = targets.find(t => t.type === 'page') || targets[0];
    console.log('Connecting to ws:', page.webSocketDebuggerUrl);

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = msg => {
      const data = JSON.parse(msg.data);
      if (data.id && callbacks.has(data.id)) {
        callbacks.get(data.id)(data);
        callbacks.delete(data.id);
      }
      if (data.method === 'Runtime.consoleAPICalled') {
        console.log('[BROWSER CONSOLE]', data.params.type, data.params.args.map(a => a.value || a.description).join(' '));
      }
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('[BROWSER ERROR]', data.params.exceptionDetails);
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
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });

    console.log('Navigating to http://localhost:5173/');
    await send('Page.navigate', { url: 'http://localhost:5173/' });
    await wait(3000);

    // Evaluate experience & project info
    const evalResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const exp = document.getElementById('experience');
        const proj = document.getElementById('projects');
        const expStack = exp ? exp.querySelector('.scroll-stack') : null;
        const projStack = proj ? proj.querySelector('.scroll-stack') : null;
        
        return {
          expExists: !!exp,
          projExists: !!proj,
          expScrollHeight: expStack ? expStack.scrollHeight : 0,
          expClientHeight: expStack ? expStack.clientHeight : 0,
          projScrollHeight: projStack ? projStack.scrollHeight : 0,
          projClientHeight: projStack ? projStack.clientHeight : 0,
          expSlots: expStack ? expStack.querySelectorAll('[data-stack-slot]').length : 0,
          projSlots: projStack ? projStack.querySelectorAll('[data-stack-slot]').length : 0,
        };
      })()`,
      returnByValue: true
    });
    console.log('Section info:', evalResult.result.value);

    // Scroll to experience
    await send('Runtime.evaluate', {
      expression: `document.getElementById('experience')?.scrollIntoView();`
    });
    await wait(1000);

    // Screenshot of experience
    const shot1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(__dirname, 'experience_shot.png'), Buffer.from(shot1.data, 'base64'));
    console.log('Saved experience_shot.png');

    // Scroll to projects
    await send('Runtime.evaluate', {
      expression: `document.getElementById('projects')?.scrollIntoView();`
    });
    await wait(1000);

    // Screenshot of projects
    const shot2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(__dirname, 'projects_shot.png'), Buffer.from(shot2.data, 'base64'));
    console.log('Saved projects_shot.png');

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    cleanup();
  }
}

run();
