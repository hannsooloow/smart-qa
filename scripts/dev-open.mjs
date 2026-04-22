import { spawn } from "node:child_process";

const port = process.env.PORT ?? "3000";
const url = `http://localhost:${port}`;
const nextBinary = process.platform === "win32"
  ? "node_modules\\.bin\\next.cmd"
  : "node_modules/.bin/next";

let nextProcess;
let isShuttingDown = false;

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function isServerReachable(targetUrl) {
  try {
    const response = await fetch(targetUrl, {
      signal: AbortSignal.timeout(1000),
    });

    return response.ok;
  } catch {
    return false;
  }
}

function openBrowser(targetUrl) {
  if (process.platform === "win32") {
    const browserProcess = spawn("cmd", ["/c", "start", "", targetUrl], {
      detached: true,
      stdio: "ignore",
    });

    browserProcess.unref();
    return;
  }

  const command = process.platform === "darwin" ? "open" : "xdg-open";
  const browserProcess = spawn(command, [targetUrl], {
    detached: true,
    stdio: "ignore",
  });

  browserProcess.unref();
}

function shutdown(signal) {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;

  if (nextProcess) {
    nextProcess.kill(signal);
    return;
  }

  process.exit(0);
}

async function main() {
  if (await isServerReachable(url)) {
    console.log(`SmartQA is already running at ${url}. Opening browser...`);
    openBrowser(url);
    return;
  }

  console.log(`Starting SmartQA dev server on ${url}...`);

  nextProcess = spawn(nextBinary, ["dev", "--port", port], {
    stdio: "inherit",
    env: process.env,
  });

  nextProcess.on("exit", (code, signal) => {
    if (signal) {
      process.exit(0);
      return;
    }

    process.exit(code ?? 0);
  });

  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (await isServerReachable(url)) {
      console.log(`SmartQA is ready at ${url}. Opening browser...`);
      openBrowser(url);
      return;
    }

    await sleep(500);
  }

  console.error(`Timed out waiting for SmartQA to become available at ${url}.`);
  shutdown("SIGTERM");
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

main().catch((error) => {
  console.error("Unable to start SmartQA.");
  console.error(error);
  shutdown("SIGTERM");
});