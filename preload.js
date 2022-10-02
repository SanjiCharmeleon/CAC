//A preload script runs before the renderer process is loaded, and has access to both renderer globals (e.g. window and document) and a Node.js environment.

const { contextBridge, ipcRenderer} = require('electron') //require() reads a JavaScript file, executes it, and then proceeds to return the export object.

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  // exposes selected properties of Electron's process.versions object to the renderer process in a versions global variable.
})