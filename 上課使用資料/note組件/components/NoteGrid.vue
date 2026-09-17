<script setup>
import { useNoteStore } from '../stores/NoteStore'

const noteStore = useNoteStore()
const { markedPinned } = noteStore

// 便利貼配色與旋轉角度，依卡片順序輪流套用
const colors = ['var(--sticky-yellow)', 'var(--sticky-pink)', 'var(--sticky-blue)', 'var(--sticky-green)', 'var(--sticky-purple)']
const rotations = [-3, 2, -2, 3, -1.5]

function getColor(index) {
  return colors[index % colors.length]
}
function getRotation(index) {
  return rotations[index % rotations.length]
}
</script>

<template>
  <div class="board">
    <div
      v-for="(note, index) in noteStore.visibleNotes"
      :key="note.id"
      class="sticky"
      :style="{ background: getColor(index), transform: `rotate(${getRotation(index)}deg)` }"
    >
      <button class="pin" :class="{ active: note.pinned }" title="置頂/取消置頂" @click="markedPinned(note.id)">📌</button>
      <router-link :to="{ name: 'edit', params: { id: note.id } }" class="sticky-body">
        <h5>{{ note.title }}</h5>
        <p>{{ note.content }}</p>
      </router-link>
    </div>

    <p v-if="noteStore.visibleNotes.length === 0" class="empty">目前還沒有筆記，點左側「新增筆記」開始寫吧！</p>
  </div>
</template>

<style scoped>
.board {
  columns: 3 220px;
  column-gap: 20px;
  padding: 4px 0 40px;
}
.sticky {
  break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  padding: 18px;
  border-radius: 6px;
  box-shadow: var(--shadow);
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.sticky:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px) rotate(0deg) !important;
}
.sticky-body h5 {
  margin: 6px 0 10px;
  font-size: 17px;
  color: var(--ink);
}
.sticky-body p {
  margin: 0;
  color: #55503f;
  white-space: pre-wrap;
  line-height: 1.5;
}
.pin {
  position: absolute;
  top: -10px;
  left: -6px;
  background: transparent;
  font-size: 20px;
  filter: grayscale(1) opacity(0.6);
}
.pin.active {
  filter: none;
}
.empty {
  color: var(--muted);
}
</style>
