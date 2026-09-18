<script setup>
// 頂部工具列：品牌名稱 + 搜尋表單
// 重點：送出表單時，要把關鍵字交給 store 搜尋，再跳轉到搜尋結果頁
</script>

<template>
  <nav class="toolbar">
    <router-link :to="{ name: 'grid' }" class="brand">
      <i class="fa-solid fa-note-sticky logo-icon"></i> Quick Note
    </router-link>
    <form class="search-form" @submit.prevent="goSearch">
      <input v-model="keyword" type="search" placeholder="搜尋筆記..." aria-label="搜尋筆記">
      <button type="submit" class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
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
.logo-icon {
  font-size: 20px;
  color: var(--accent);
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
