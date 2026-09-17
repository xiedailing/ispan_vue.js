<template>
  <div>
    <h1>我的筆記應用</h1>
    
    <input v-model="note" @input="updateLocalStorage" placeholder="輸入筆記" />
    <p>您的筆記：{{ note }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted, onUpdated, onUnmounted, onBeforeUnmount } from 'vue';
 //從localStorage獲得資料
const note = ref(localStorage.getItem('userNote') || '');
onMounted(() => {
    console.log('筆記已掛載');
});
onUpdated(() => {
    updateLocalStorage();
    console.log('筆記應用已經更新。');
});
onBeforeUnmount(() => {
    
    alert('筆記應用卸載前');
});
onUnmounted(() => {
    updateLocalStorage();
    alert('onUnmounted-筆記應用即將卸載。');
});
// 注意：這裡存的是 localStorage（永久保存），不是 sessionStorage（分頁關閉就消失）
const updateLocalStorage = () => {
  localStorage.setItem('userNote', note.value);
};
</script>
