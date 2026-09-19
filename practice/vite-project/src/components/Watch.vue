<template lang="">
    <h2>Watch / WatchEffect 練習</h2>
    <input type="text " v-model=inputValue placeholder="請輸入文字">
    <p>輸入的文字長度: {{ inputLength }}</p>
    <hr>
    <p>今日氣溫: {{temp}}</p>
    <p>今日穿著建議: {{cloth}}</p>
    <button class="btn btn-outline-dark" @click="updateTemp()">更新氣溫</button>

</template>


<script setup>
import { ref, watch, watchEffect } from 'vue';

// Watch (控制區域變數)
const inputValue = ref('');
const inputLength = ref(0);
watch(inputValue, (newVal) => {
    inputLength.value = newVal.length;
    if (inputLength.value > 30){
        alert("文字太長囉")
    }
});

// WatchEffect (控制全域變數)
const temp = ref(30);
const cloth = ref('無袖上衣');
const updateTemp = () => (
    temp.value = 10)

watchEffect(() => {
    if (temp.value >= 30){
        cloth.value = '無袖上衣'
    }else if(temp.value <= 10){
        cloth.value = '羽絨外套'
    }else {
        cloth.value = '隨便你穿'
    }
});

</script>


<style lang="">
    
</style>