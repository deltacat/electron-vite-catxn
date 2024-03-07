import path from 'path'
import { ipcMain } from 'electron'
import { getSysInfo } from './common'
import { exitApp } from './common/sys'

function bindControllers(filename: string, module: object) {
  const dirSecs = path.dirname(filename).split(/[.\\/]/)
  const extName = path.extname(filename)
  const modName = path.basename(filename, extName)
  const category = [...dirSecs, modName].filter((str) => str && str !== 'index').join('.')
  Object.keys(module).forEach((key: string) => {
    const fname = key
    const f = module[key]
    const controllerName = category + '.' + fname
    console.debug('controller:binding', controllerName)
    ipcMain.handle(controllerName, f)
  })
}

/**
 * 动态绑定 API
 * 将 controller 目录下的方法自动暴露为 API
 * 注：指定导入 default，便于仅将部分导出函数作为API暴露
 */
function loadControllers() {
  const modules = import.meta.glob(['./*.js', './*.ts', './**/*.ts', './**/*.js', '!./index.ts'], {
    eager: true,
    import: 'default'
  })
  Object.keys(modules).forEach((key) => bindControllers(key, modules[key] as object))
}

export default {
  load: loadControllers,
  getSysInfo,
  exitApp
}
