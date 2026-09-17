<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNoteStore } from '../stores/NoteStore'

const router = useRouter()
const noteStore = useNoteStore()
const keyword = ref('')

// 執行搜尋：把關鍵字交給 store 篩選，再切換到搜尋結果頁
function goSearch() {
  noteStore.searchNotes(keyword.value)
  router.push({ name: 'search' })
}
</script>

<template>
  <nav class="toolbar">
    <router-link :to="{ name: 'grid' }" class="brand">
      <span class="logo-emoji">🗒️</span> Quick Note
    </router-link>
    <form class="search-form" @submit.prevent="goSearch">
      <input v-model="keyword" type="search" placeholder="搜尋筆記..." aria-label="搜尋筆記">
      <button type="submit" class="search-btn">🔍</button>
    </form>
  </nav>
</template>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 28px;
  background: var(--panel-bg);
  box-shadow: var(--shadow);
}
.brand {
  font-size: 20px;
  font-weight: 700;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-emoji {
  font-size: 24px;
}
.search-form {
  display: flex;
  gap: 8px;
}
.search-form input {
  width: 220px;
}
.search-btn {
  padding: 8px 14px;
  background: var(--accent);
  color: #fff;
}
.search-btn:hover {
  background: var(--accent-dark);
}
</style>
