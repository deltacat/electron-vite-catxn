import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 组件外使用 Pinia： https://juejin.cn/post/7187979210391027767
router.beforeEach(async (_to, _from, next) => {
  next()
})

export default router
