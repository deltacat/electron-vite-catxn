import os from 'os'
import { version as appVer, description } from '../../../../package.json'

function hello() {
  return `欢迎使用 ${description}`
}

function getVersions() {
  return Object.assign({ appVer }, process.versions)
}

export function getSysInfo() {
  return {
    versions: getVersions(),
    osType: os.type(),
    osRelease: os.release(),
    osVersion: os.version()
  }
}

export default { hello, getVersions }
