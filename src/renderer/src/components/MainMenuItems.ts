import type { Component } from 'vue'
import MdiCogOutline from '~icons/mdi/cog-outline'
import MdiFunction from '~icons/mdi/function'
import MdiMovieOpenOutline from '~icons/mdi/movie-open-outline'
import MdiPresentation from '~icons/mdi/presentation'
import MdiTools from '~icons/mdi/tools'

export type MenuItemOpt = {
  title: string
  path: string
  icon: Component
  // 是否隐藏
  hidden?: boolean
  // 子菜单
  children?: MenuItemOpt[]
}

const hidden = true

const commonMenuItems: MenuItemOpt[] = [
  {
    title: '功能测试',
    path: '/common/tryitc',
    icon: MdiPresentation
  }
]

const manageMenuItems: MenuItemOpt[] = [
  {
    title: '通用设置',
    path: '/settings/common',
    icon: MdiCogOutline
  }
]

export const MenuItems: MenuItemOpt[] = [
  {
    title: '常用',
    path: '/common',
    icon: MdiMovieOpenOutline,
    children: commonMenuItems
  },
  {
    title: '功能',
    path: '/function',
    icon: MdiFunction,
    hidden
  },
  {
    title: '管理工具',
    path: '/manage',
    icon: MdiTools,
    children: manageMenuItems
  }
]
