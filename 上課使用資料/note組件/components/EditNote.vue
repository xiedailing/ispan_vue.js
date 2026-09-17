<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNoteStore } from '../stores/NoteStore'

const route = useRoute()
const router = useRouter()
const noteStore = useNoteStore()

const noteId = Number(route.params.id)
const currentNote = noteStore.notes.find(note => note.id === noteId)

const title = ref(currentNote ? currentNote.title : '')
const content = ref(currentNote ? currentNote.content : '')
const saved = ref(false)
let hideTimer = null

// 標題或內容一有變化，就直接把資料寫回 store（不用按儲存鈕）
watch([title, content], () => {
  noteStore.editNote(noteId, title.value, content.value)
  saved.value = true
  clearTimeout(hideTimer)
  hideTimer = setTimeout(() => { saved.value = false }, 1500)
})

function backToBoard() {
  router.push({ name: 'grid' })
}
</script>

<template>
  <div v-if="currentNote" class="note-editor">
    <div class="editor-header">
      <h2>📝 編輯筆記</h2>
      <span v-if="saved" class="saved-tag">已儲存 ✓</span>
    </div>
    <input v-model="title" class="title-input" placeholder="請輸入標題...">
    <textarea v-model="content" class="content-input" rows="16" placeholder="開始輸入筆記內容..."></textarea>
    <button class="btn-back" @click="backToBoard">← 回到筆記牆</button>
  </div>
  <p v-else class="not-found">找不到這筆筆記，可能已經被刪除了。</p>
</template>

<style scoped>
.note-editor {
  background: var(--panel-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px;
  max-width: 700px;
}
.editor-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.editor-header h2 {
  margin: 0;
}
.saved-tag {
  font-size: 13px;
  color: #2f9e44;
  background: #e6f9ea;
  padding: 3px 10px;
  border-radius: 999px;
}
.title-input {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}
.content-input {
  width: 100%;
  resize: vertical;
  line-height: 1.6;
}
.btn-back {
  margin-top: 18px;
  padding: 8px 18px;
  background: #eee;
}
.not-found {
  color: var(--muted);
}
</style>
