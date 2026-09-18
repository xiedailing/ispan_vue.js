<template lang="">
    <hr>
    <div class="container p-5" :style="{ backgroundColor: bgColor }">
        <button @click="changeColor" class="btn btn-light">隨機切換顏色</button>

    </div>
</template>


<script setup>
    import { ref } from 'vue';
    
    const bgColor = ref("#000");

    function changeColor() {
        // 產生一個 0 到 16777215 (即 FFFFFF) 的隨機整數，並轉成 16 進位字串
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        bgColor.value = randomColor;
    };

</script>


<style lang="">
    
</style>