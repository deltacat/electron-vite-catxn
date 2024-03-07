<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { commonApi } from '@renderer/api'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const versions = ref({} as any)
onMounted(async () => {
  versions.value = await commonApi.getVersions()
})
</script>

<template>
  <ul class="copyright">
    <li>xxxxxxxx有限公司 © 2022-2024 丨 邮箱: somebody@something.com | 电话: 010-88888888</li>
  </ul>
  <ul class="versions">
    <li>Version: {{ versions.appVer }}</li>
    <li class="electron-version">Electron {{ versions.electron }}</li>
    <li class="chrome-version">Chromium {{ versions.chrome }}</li>
    <li class="node-version">Node {{ versions.node }}</li>
  </ul>
</template>
