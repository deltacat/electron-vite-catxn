const electronApi = window.electron

function appendCmdName(...secs: string[]) {
  return secs.join('.')
}

export const COMMON_API_PREFIX = 'common'

export class ElectronBackendBase {
  protected apiPrefix: string

  constructor(apiPrefix: string) {
    this.apiPrefix = apiPrefix
  }

  protected getApiName(name: string) {
    return appendCmdName(this.apiPrefix, name)
  }

  protected invoke(name: string, params?: object | string) {
    const apiName = this.getApiName(name)
    return electronApi.invoke(apiName, params)
  }

  protected addMainEvtListener(evtName: string, handler: unknown) {
    return electronApi.addListener(evtName, handler)
  }
}
