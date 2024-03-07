import { defineStore } from 'pinia'

const useCommonStore = defineStore('Common', {
  state: () => {
    return {
      busy: {
        state: false,
        message: ''
      }
    }
  },
  persist: false,
  actions: {
    setBusy(state: boolean, msg?: string) {
      const message = msg || ''
      this.busy = { state, message }
    }
  }
})

export default useCommonStore
