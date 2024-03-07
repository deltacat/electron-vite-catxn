/* eslint-disable @typescript-eslint/no-explicit-any */
import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron'

const electronAPI = {
  invoke: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),
  addListener: (eventName: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) =>
    ipcRenderer.addListener(eventName, listener)
}

// Custom APIs for renderer
const api = {}
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
