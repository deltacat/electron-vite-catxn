import { app, dialog } from 'electron'

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const openFolderDialog = ({ filters, properties }) => {
  return dialog.showOpenDialogSync({ filters, properties })
}

export function exitApp() {
  // TODO: graceful exit...
  app.exit()
}

export default { exitApp, openFolderDialog }
