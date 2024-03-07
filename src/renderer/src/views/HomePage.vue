<script setup lang="ts"></script>

<template>
  <el-container>
    <el-header></el-header>
    <el-main class="home-content">
      <img alt="logo" class="logo" src="../assets/electron.svg" />
      <div class="creator">
        Powered by
        <a href="https://electron-vite.org" target="_blank">electron-vite</a>
      </div>
      <div class="text">
        Build an Electron app with
        <span class="vue">Vue</span>
        and
        <span class="ts">TypeScript</span>
      </div>
      <p class="tip">
        Please try pressing
        <code>F12</code>
        to open the devTool
      </p>
    </el-main>
    <el-footer><Versions /></el-footer>
  </el-container>
</template>

<style scoped>
.home-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
