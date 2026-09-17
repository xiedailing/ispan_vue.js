import { createRouter, createWebHistory } from 'vue-router';
import NoteEditor from './components/NoteEditor.vue';
import NoteGrid from './components/NoteGrid.vue';
import SearchNote from './components/SearchNote.vue';
const routes = [
  { path: '/', component: NoteGrid, name: 'grid' },
  // 新增、編輯共用同一個 NoteEditor 元件，差別只在網址有沒有帶 :id
  { path: '/add', component: NoteEditor, name: 'add' },
  { path: '/edit/:id', component: NoteEditor, name: 'edit' },
  { path: '/search', component: SearchNote, name: 'search' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
