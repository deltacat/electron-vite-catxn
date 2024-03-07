import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@renderer/views/HomePage.vue')
  },
  // {
  //   path: '/settings/common',
  //   name: 'CommonSettingsPage',
  //   component: () => import('@renderer/views/settings/Common.vue')
  // },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
