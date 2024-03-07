<script lang="ts" setup>
import { useStore } from '@renderer/store'
import { ElLoading } from 'element-plus'
import { watch } from 'vue'
import MainMenu from './MainMenu.vue'
const { commonStore, storeToRefs } = useStore()
const { busy } = storeToRefs(commonStore)

watch(busy, async (newVal, oldVal) => setBusy(newVal, oldVal))

let loading: { close: () => void; setText: (text: string) => void }
async function setBusy(newVal, oldVal) {
  const { state: newState, message: newMessage } = newVal
  const { state: oldState, message: oldMessage } = oldVal
  if (newState) {
    if (newMessage) {
      if (!oldState) {
        loading = ElLoading.service({ fullscreen: true, text: newMessage })
      } else if (newMessage !== oldMessage) {
        loading && loading.setText(newMessage)
      }
    }
  } else {
    loading && loading.close()
  }
}
</script>

<template>
  <div style="height: 100vh">
    <el-container>
      <el-aside class="aside">
        <MainMenu />
      </el-aside>
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="less">
@import '@renderer/assets/css/styles.less';

.aside {
  width: 200px !important;
  background-color: #545c64;
}
.el-header {
  height: @header-height !important;
  line-height: @header-height !important;
}
.header-bar {
  height: @header-height !important;
  line-height: @header-height !important;
}
.el-container {
  height: 100%;
}
</style>
