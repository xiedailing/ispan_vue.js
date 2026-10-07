<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useTodoStore } from './stores/myNote_store';

import NoteList from './components/NoteList.vue';

const todoStore = useTodoStore();
</script>

<template>
  <header>
    <nav class="navbar topbar">
      <div class="container-fluid flex-wrap gap-2">
        <router-link class="navbar-brand brand" to="/"><img src="/note_logo.png" alt="" class="logo">My Note</router-link>
        <form class="d-flex search" role="search" @submit.prevent>
          <input class="form-control me-2" type="search" placeholder="搜尋筆記" aria-label="Search" v-model="todoStore.keyword"/>
          <button class="btn btn-outline-light" type="submit">搜尋</button>
        </form>
      </div>
    </nav>
  </header>

  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3 pt-3">
          <!-- 選單 -->
          <NoteList />
        </div>
        <div class="col-12 col-md-8 col-lg-9 pt-3">
          <RouterView :key="$route.fullPath" />
        </div>
      </div>
    </div>
  </main>

  <hr>

  <footer>
    <p>&copy; 2026 Ispan Vue.js</p>
  </footer>
</template>

<style scoped>
.topbar {
  background: #8a9a3b;
  padding: 6px 0;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  color: #fbf1dd;
  font-family: 'DIN Alternate', 'Arial Narrow', 'Noto Sans TC', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.search {
  flex-shrink: 0;
}
@media (max-width: 575.98px) {
  .search {
    flex-grow: 1;
  }
}
.search .btn {
  white-space: nowrap;
}
.search .form-control {
  background: #fbf1dd;
  border-color: #fbf1dd;
}
.search .btn-outline-light {
  color: #fbf1dd;
  border-color: #fbf1dd;
}
.search .btn-outline-light:hover {
  background: #fbf1dd;
  color: #6b7a2a;
}
.brand:hover {
  color: #fff;
}
.logo {
  width: 32px;
  padding: 2px;
  border: 2px solid #fbf1dd;
  border-radius: 50%;
}
</style>
