<script lang="ts" setup>
import { sysApi } from '@renderer/api'
import { ref } from 'vue'
import MdiHome from '~icons/mdi/home'
import MdiPower from '~icons/mdi/power'
import { MenuItemOpt, MenuItems } from './MainMenuItems'

function showMenuItem(item: MenuItemOpt) {
  return !item.hidden
}

function exitApp() {
  sysApi.exitApp()
}

const visibleSubmenus = (items) => items.filter((item) => showMenuItem(item))
const visibleItems = (items) => items.filter((item) => showMenuItem(item))

const openeds = ref(['/estor'])
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    class="main-menu"
    text-color="#fff"
    default-active="/"
    :default-openeds="openeds"
    :router="true"
    style="height: 100%">
    <el-menu-item index="/">
      <el-icon>
        <MdiHome />
      </el-icon>
      <span>主页</span>
    </el-menu-item>
    <el-sub-menu v-for="pm in visibleSubmenus(MenuItems)" :key="pm.path" :index="pm.path">
      <template #title>
        <el-icon><component :is="pm.icon" /></el-icon>
        <span>{{ pm.title }}</span>
      </template>
      <el-menu-item v-for="sm in visibleItems(pm.children)" :key="sm.path" :index="sm.path">
        <template #title>
          <el-icon><component :is="sm.icon" /></el-icon>
          <span>{{ sm.title }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item @click="exitApp()">
      <el-icon><MdiPower /></el-icon>
      <span>退出</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="less">
@import '@renderer/assets/css/styles.less';

.main-menu {
  border-right: 0 !important;
}
</style>
