import Versions from './Versions.vue'

const components = {
  Versions
}

export const GlobalComponents = (app) => {
  Object.keys(components).forEach((key) => {
    app.component(`${key}`, components[key])
  })
}
