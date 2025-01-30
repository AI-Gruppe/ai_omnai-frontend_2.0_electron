const { app, BrowserWindow, ipcMain } = require("electron");
const { spawn } = require("child_process");
const path = require("node:path");

let mainWindow;
let backendProcess; // Reference to backend process

// Start backend process (WebSocket server)
function startBackend(event) {
  const exePath = path.join(__dirname, "res", "omnai", "MiniOmni.exe");
  backendProcess = spawn(exePath, ["-w"]);

  backendProcess.stdout.on("data", (data) => {
    const message = data.toString();
    console.log(`Backend: ${message}`);
    if (event) event.sender.send("omnai-output", message);
  });

  backendProcess.stderr.on("data", (data) => {
    const error = data.toString();
    console.error(`Backend Error: ${error}`);
    if (event) event.sender.send("omnai-error", error);
  });

  backendProcess.on("close", (code) => {
    console.log(`Backend process exited with code ${code}`);
    if (event)
      event.sender.send("omnai-closed", `Backend exited with code ${code}`);
  });

  console.log("Backend process started...");
}

// Stop backend process
function stopBackend() {
  if (backendProcess) {
    backendProcess.kill();
    console.log("Backend process stopped.");
  }
}

// Create main application window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  mainWindow.loadFile("electron/res/angular/browser/index.html");
}

// IPC handler to start the backend
ipcMain.handle("start-backend", (event) => {
  startBackend(event);
  return "Backend started.";
});

// Execute OmnAI command
ipcMain.handle("run-omnai-command", (event, commandArgs) => {
  const exePath = path.join(__dirname, "res", "omnai", "MiniOmni.exe");
  const omniProcess = spawn(exePath, commandArgs);

  omniProcess.stdout.on("data", (data) => {
    event.sender.send("omnai-output", data.toString());
  });

  omniProcess.stderr.on("data", (data) => {
    event.sender.send("omnai-error", data.toString());
  });

  omniProcess.on("close", (code) => {
    event.sender.send("omnai-closed", `Process exited with code ${code}`);
  });
});

// Initialize app
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Handle app shutdown
app.on("window-all-closed", () => {
  stopBackend();

  if (process.platform !== "darwin") {
    app.quit();
  }
});
