<script setup>
// 搜尋結果頁
// 重點：直接讀 store 裡存好的搜尋結果，不用自己再算一次
</script>

<template>
  <div class="search-result">
    <h2><i class="fa-solid fa-magnifying-glass"></i> 搜尋結果</h2>
    <p v-if="noteStore.searchResults.length === 0" class="empty">查無相關資料</p>
    <div v-else class="result-list">
      <router-link
        v-for="note in noteStore.searchResults"
        :key="note.id"
        :to="{ name: 'edit', params: { id: note.id } }"
        class="result-card"
      >
        <h5>{{ note.title }}</h5>
        <p>{{ note.content }}</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.search-result h2 {
  margin-top: 0;
}
.empty {
  color: var(--muted);
}
.result-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.result-card {
  background: var(--panel-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.result-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}
.result-card h5 {
  margin: 0 0 8px;
}
.result-card p {
  margin: 0;
  color: #55503f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
