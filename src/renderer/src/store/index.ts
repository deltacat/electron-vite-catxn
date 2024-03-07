import { storeToRefs } from 'pinia'
import useCommonStore from './common'

export function useStore() {
  return {
    commonStore: useCommonStore(),
    storeToRefs
  }
}

export default useStore
