<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/NoteStore'

const noteStore = useNoteStore()
const { deleteNote, markedPinned } = noteStore

// 存放「準備要刪除的筆記」，有值就顯示確認彈窗，null 就不顯示
const noteToDelete = ref(null)

function askDelete(note) {
  noteToDelete.value = note
}
function cancelDelete() {
  noteToDelete.value = null
}
function confirmDelete() {
  deleteNote(noteToDelete.value.id)
  noteToDelete.value = null
}
</script>

<template>
  <div class="sidebar-panel">
    <router-link :to="{ name: 'add' }" class="add-btn"><i class="fa-solid fa-plus"></i> 新增筆記</router-link>

    <h3 class="section-title"><i class="fa-solid fa-thumbtack"></i> 重要</h3>
    <ul class="note-list">
      <li v-for="note in noteStore.pinnedNotes" :key="note.id">
        <router-link :to="{ name: 'edit', params: { id: note.id } }" class="note-row">
          <span class="note-title">{{ note.title }}</span>
        </router-link>
        <span class="icon-group">
          <button class="icon-btn" title="取消置頂" @click="markedPinned(note.id)"><i class="fa-solid fa-thumbtack"></i></button>
          <button class="icon-btn" title="刪除" @click="askDelete(note)"><i class="fa-solid fa-trash"></i></button>
        </span>
      </li>
    </ul>

    <h3 class="section-title"><i class="fa-solid fa-folder-open"></i> 全部</h3>
    <ul class="note-list">
      <li v-for="note in noteStore.allNotes" :key="note.id">
        <router-link :to="{ name: 'edit', params: { id: note.id } }" class="note-row">
          <span class="note-title">{{ note.title }}</span>
        </router-link>
        <span class="icon-group">
          <button class="icon-btn icon-btn-muted" title="置頂" @click="markedPinned(note.id)"><i class="fa-solid fa-thumbtack"></i></button>
          <button class="icon-btn" title="刪除" @click="askDelete(note)"><i class="fa-solid fa-trash"></i></button>
        </span>
      </li>
    </ul>
  </div>

  <!-- 自製刪除確認彈窗 -->
  <div v-if="noteToDelete" class="modal-overlay">
    <div class="modal-box">
      <h4>刪除筆記</h4>
      <p>確定要刪除「{{ noteToDelete.title }}」嗎？</p>
      <div class="modal-actions">
        <button class="btn-cancel" @click="cancelDelete">取消</button>
        <button class="btn-danger" @click="confirmDelete">刪除</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-panel {
  background: var(--panel-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px;
}
.add-btn {
  display: block;
  text-align: center;
  padding: 10px;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
}
.add-btn i {
  margin-right: 4px;
}
.add-btn:hover {
  background: var(--accent-dark);
}
.section-title {
  margin: 18px 0 8px;
  font-size: 14px;
  color: var(--muted);
}
.note-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.note-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 6px;
  border-radius: 8px;
}
.note-list li:hover {
  background: #f7f0df;
}
.note-row {
  flex: 1;
  min-width: 0;
}
.note-title {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}
.icon-group {
  display: flex;
  gap: 4px;
}
.icon-btn {
  background: transparent;
  border-radius: 6px;
  padding: 4px;
  font-size: 14px;
}
.icon-btn:hover {
  background: #ecdfc0;
}
.icon-btn-muted {
  opacity: 0.55;
}

/* 確認彈窗 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.modal-box {
  background: #fff;
  border-radius: var(--radius);
  padding: 24px;
  width: 320px;
  box-shadow: var(--shadow-hover);
}
.modal-box h4 {
  margin-top: 0;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}
.btn-cancel {
  padding: 8px 16px;
  background: #eee;
}
.btn-danger {
  padding: 8px 16px;
  background: var(--danger);
  color: #fff;
}
</style>
