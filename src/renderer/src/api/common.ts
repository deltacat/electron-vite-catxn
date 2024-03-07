import { ElectronBackendBase, COMMON_API_PREFIX } from './base'

class CommonApi extends ElectronBackendBase {
  constructor() {
    super(COMMON_API_PREFIX)
  }

  hello() {
    return this.invoke('hello')
  }

  getVersions() {
    return this.invoke('getVersions')
  }

  exitApp() {
    return this.exitApp()
  }
}

export const commonApi = new CommonApi()
