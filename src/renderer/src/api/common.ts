import { ElectronBackendBase, COMMON_API_PREFIX, COMMON_SYS_API_PREFIX } from './base'

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
    return this.invoke('exitApp')
  }
}

class SystemApi extends ElectronBackendBase {
  constructor() {
    super(COMMON_SYS_API_PREFIX)
  }
  exitApp() {
    return this.invoke('exitApp')
  }
}

export const commonApi = new CommonApi()
export const sysApi = new SystemApi()
