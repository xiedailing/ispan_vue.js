<template>
    <div>
      <p>{{ message }}</p>
      <button @click="updateMessage">更新訊息</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';

  const message = ref('這是初始訊息');

  // watchEffect 會自動追蹤 callback 內用到的響應式資料，
  // 這裡因為讀取了 message.value，所以 message 一變，這段就會自動重新執行
  watchEffect(() => {
    console.log('訊息已更新完畢：', message.value);
  });

  const updateMessage = () => {
    message.value = '訊息已更新';
  };
  </script>
  