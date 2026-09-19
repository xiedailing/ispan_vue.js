<template lang="">
    <!-- 迴圈產生小圖，點擊時直接把當前的 img 賦予給 currentImage -->
    <img 
    v-for="(img, index) in images" 
    :key="index" 
    :src="img" 
    @click="currentImage = img"
    class="thumbnail"
    />
    <div class="d-flex gap-2">
        <div class="col-3">

        </div>
        <div class="col-3">

        </div>
        <div class="col-3">

        </div>
        <div class="col-3">

        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';



</script>
<style lang="">
    
</style>