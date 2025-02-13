const { app, BrowserWindow, ipcMain } = require("electron");
const { spawn } = require("child_process");
const path = require("node:path");

if (require("electron-squirrel-startup")) app.quit();

let mainWindow;
let backendProcess; // Reference to backend process

function startBackend() {
  const exePath = path.join(__dirname, "res", "omnai", "MiniOmni.exe");
  backendProcess = spawn(exePath, ["-w"]);

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
    autoHideMenuBar: true,
    icon: path.join(__dirname, "res", "Icon.ico")
  });
 const indexPath = path.join(__dirname, "res", "angular", "browser", "index.html");
  mainWindow.loadFile(indexPath);
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
  startBackend();
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
