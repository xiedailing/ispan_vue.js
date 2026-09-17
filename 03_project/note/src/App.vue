<script setup>
import ToolBar from './components/ToolBar.vue'
import NoteList from './components/NoteList.vue'
</script>

<template>
  <header>
    <ToolBar />
  </header>
  <div class="layout">
    <aside class="sidebar">
      <NoteList />
    </aside>
    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <!-- 用網址當 key：從 A 筆記切到 B 筆記時強制重建元件，避免畫面沒更新 -->
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>
  <footer>
    <p>Copyright© macroviz.com</p>
  </footer>
</template>

<style scoped>
.layout {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}
.sidebar {
  width: 260px;
  flex-shrink: 0;
}
.content {
  flex: 1;
  min-width: 0;
}
footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--ink);
}
footer p {
  color: #fff;
  line-height: 50px;
  text-align: center;
  margin: 0;
  font-size: 14px;
}
</style>
