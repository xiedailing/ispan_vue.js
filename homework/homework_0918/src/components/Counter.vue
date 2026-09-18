<template lang="">
<div class="container mt-3">

    <!-- 數字 -->
    <div class="row mb-1">
      <div class="col">
        <p>計數：{{ counter }}</p>
      </div>
    </div>

    <!-- 按鈕 -->
    <div class="row">
      <div class="col">
        <button @click="counter--" class="btn btn-outline-dark">-1</button>
        <button @click="counter++" class="ms-2 btn btn-outline-dark">+1</button>
      </div>
    </div>
</div>
</template>


<script setup>
import { ref } from 'vue';

const counter = ref(0);

</script>


<style lang="">
    
</style>