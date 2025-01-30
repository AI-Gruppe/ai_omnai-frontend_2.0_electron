const { contextBridge, ipcRenderer } = require("electron");

// Secure access to APIs
contextBridge.exposeInMainWorld("omnai", {
  // Send commands to backend
  sendCommand: (commandArgs) =>
    ipcRenderer.invoke("run-omnai-command", commandArgs),

  // Start backend process
  startBackend: () => ipcRenderer.invoke("start-backend"),

  // Receive backend output
  onOutput: (callback) =>
    ipcRenderer.on("omnai-output", (event, data) => callback(data)),

  // Receive backend errors
  onError: (callback) =>
    ipcRenderer.on("omnai-error", (event, error) => callback(error)),

  // Receive backend process termination message
  onClosed: (callback) =>
    ipcRenderer.on("omnai-closed", (event, message) => callback(message)),
});
