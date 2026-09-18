<template lang="">
    <button class="btn btn-primary">預設Primary</button>

    <button class="btn btn-Tertiary">
        開始計時
    </button>
    <p class="h3"> {{seconds}} </p>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onUpdated } from 'vue'

const seconds = ref(0);
let timer = null;

onBeforeMount(() => {
    alert("實例載入前");
});
onMounted(() => {
    console.log("實例已載入");
    timer = setInterval(() => {
        seconds.value
    }, 1000);
});
onUpdated(() => {
    console.log("已更新");
});

</script>

<style lang="">
    
</style>