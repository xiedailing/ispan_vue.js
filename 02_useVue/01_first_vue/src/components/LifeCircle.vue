<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 計時器秒數
const seconds = ref(0)
let timer = null

// 組件掛載時開始計時
onMounted(() => {
  console.log('組件已載入！')
  timer = setInterval(() => {
    seconds.value++
  }, 1000)
})

// 組件卸載時清除計時器
onUnmounted(() => {
  console.log('組件已卸載！')
  clearInterval(timer)
})
</script>

<template>
  <div>
    <h1>計時器</h1>
    <p>已運行 {{ seconds }} 秒</p>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  padding: 20px;
}
h1 {
  font-size: 24px;
}
p {
  font-size: 18px;
}
</style>
 