<script setup>
// 便利貼佈告欄：把每筆筆記畫成一張便利貼
// 重點1：顏色、旋轉角度要輪流套用（用 index 對顏色陣列取餘數）
// 重點2：算出這筆筆記待辦項目「完成幾個/共幾個」
</script>

<template>
  <div class="board">
    <div
      v-for="(note, index) in noteStore.visibleNotes"
      :key="note.id"
      class="sticky"
      :style="{ background: getColor(index), transform: `rotate(${getRotation(index)}deg)` }"
    >
      <button class="pin" :class="{ active: note.pinned }" title="置頂/取消置頂" @click="markedPinned(note.id)"><i class="fa-solid fa-thumbtack"></i></button>
      <router-link :to="{ name: 'edit', params: { id: note.id } }" class="sticky-body">
        <h5>{{ note.title }}</h5>
        <p>{{ note.content }}</p>
        <span v-if="note.items.length" class="checklist-badge">
          <i class="fa-solid fa-list-check"></i> {{ doneCount(note) }}/{{ note.items.length }}
        </span>
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
.checklist-badge {
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.6);
  padding: 2px 8px;
  border-radius: 999px;
}
.empty {
  color: var(--muted);
}
</style>
