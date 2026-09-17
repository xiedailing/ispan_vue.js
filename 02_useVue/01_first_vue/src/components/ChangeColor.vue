<template>
    <div class="box" :style="{ backgroundColor: boxColor }"></div>
  <!-- 外層 div 也綁了 click，用來觀察 .stop 有沒有真的擋住事件冒泡 -->
  <div class="container" @click="log('外層 container 被點到了')">
    <div class="buttons">
      <!-- .stop：阻止事件冒泡，點下面這顆不會觸發外層 container 的 click -->
      <button @click.stop="changeColor('red')">Red（.stop 不會冒泡到外層）</button>
      <!-- .prevent：阻止預設行為，這裡沒有預設行為可阻止，效果跟一般按鈕一樣，實務常用在表單送出、連結跳轉上 -->
      <button @click.prevent="changeColor('green')">Green（.prevent）</button>
      <!-- .capture：用「捕獲」階段（由外而內）監聽，而不是預設的「冒泡」階段（由內而外） -->
      <button @click.capture="changeColor('blue')">Blue（.capture）</button>
      <!-- .self：只有「直接點在這顆按鈕本身」才會觸發，點文字節點以外的區塊冒泡上來的不算 -->
      <button @click.self="changeColor('yellow')">Yellow（.self）</button>
      <!-- .once：這個監聽只會生效一次，之後再點就沒反應了 -->
      <button @click.once="changeColor('purple')">Purple（.once，只能變一次）</button>
      <!-- .middle：只回應滑鼠中鍵（滾輪按下），不是滾動 -->
      <button @click.middle="changeColor('orange')">Orange（按滑鼠中鍵）</button>
      <!-- .passive：告訴瀏覽器這個事件不會呼叫 preventDefault，讓滾動效能更好（常用在 scroll/touch） -->
      <button @wheel.passive="changeColor('pink')">Pink（在按鈕上滾動滑鼠滾輪）</button>
    </div>

    <p class="log" v-if="logText">事件紀錄：{{ logText }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const boxColor = ref('initial');
const logText = ref('');

const changeColor = (color) => {
  boxColor.value = color;
};

// 用來讓 .stop 的效果「看得見」：點外層 container 才會印出訊息
const log = (text) => {
  logText.value = text;
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  margin: 10px;
}

.box {
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>
