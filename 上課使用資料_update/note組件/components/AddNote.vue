<script setup>
// 這個元件「新增」跟「編輯」共用：網址有帶 id 就是編輯，沒有就先建一筆空白筆記
// 重點1：title、content 打字就要即時存回 store（不用按儲存鈕）
// 重點2：待辦項目要能新增、勾選、刪除
</script>

<template>
  <div v-if="currentNote" class="note-editor">
    <span v-if="saved" class="saved-tag"><i class="fa-solid fa-check"></i> 已儲存</span>
    <input v-model="title" class="title-input" placeholder="請輸入標題...">
    <textarea v-model="content" class="content-input" rows="12" placeholder="開始輸入筆記內容..."></textarea>

    <div class="checklist">
      <h4 class="checklist-title"><i class="fa-solid fa-list-check"></i> 待辦項目</h4>
      <ul class="checklist-items">
        <li v-for="(item, index) in currentNote.items" :key="index">
          <label class="checklist-row">
            <input type="checkbox" :checked="item.done" @change="toggleItem(noteId, index)">
            <span :class="{ 'is-done': item.done }">{{ item.text }}</span>
          </label>
          <button class="icon-btn" title="刪除項目" @click="removeItem(noteId, index)"><i class="fa-solid fa-xmark"></i></button>
        </li>
      </ul>
      <form class="add-item-form" @submit.prevent="submitNewItem">
        <input v-model="newItemText" placeholder="新增項目，按 Enter 加入...">
      </form>
    </div>

    <button class="btn btn-back" @click="backToBoard"><i class="fa-solid fa-arrow-left"></i> 回到筆記牆</button>
  </div>
  <p v-else class="not-found">找不到這筆筆記，可能已經被刪除了。</p>
</template>

<style scoped>
.note-editor {
  position: relative;
  background: var(--panel-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px;
  max-width: 700px;
}
.saved-tag {
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 13px;
  color: #2f9e44;
  background: #e6f9ea;
  padding: 3px 10px;
  border-radius: 999px;
}
.title-input {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  padding: 4px 2px;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 8px;
}
.title-input:focus {
  outline: none;
}
.content-input {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  padding: 4px 2px;
  resize: vertical;
  line-height: 1.6;
}
.content-input:focus {
  outline: none;
}
.btn-back {
  margin-top: 18px;
  padding: 8px 18px;
  background: #eee;
}
.not-found {
  color: var(--muted);
}

/* 待辦項目 */
.checklist {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #eee6d5;
}
.checklist-title {
  margin: 0 0 10px;
  font-size: 14px;
  color: var(--muted);
}
.checklist-items {
  list-style: none;
  margin: 0 0 8px;
  padding: 0;
}
.checklist-items li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 2px;
}
.checklist-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
  cursor: pointer;
}
.checklist-row input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.checklist-row span.is-done {
  text-decoration: line-through;
  opacity: 0.55;
}
.icon-btn {
  background: transparent;
  border-radius: 6px;
  padding: 4px 6px;
  font-size: 13px;
  color: var(--muted);
}
.icon-btn:hover {
  background: #f2ede3;
}
.add-item-form input {
  width: 100%;
  border: 1px dashed #e2dccd;
  background: transparent;
}
</style>
