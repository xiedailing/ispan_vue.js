<script setup>
import { ref, computed } from 'vue'

// 計數器
const count = ref(0)

// 計算 count 的兩倍
const doubleCount = computed(() => count.value * 2)

// 增加計數
function increment() {
  count.value++
}
</script>

<template>
  <div>
    <h1>計數器</h1>
    <p>計數: {{ count }}</p>
    <p>計數的兩倍: {{ doubleCount }}</p>
    <button @click="increment">加 1</button>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  padding: 20px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>