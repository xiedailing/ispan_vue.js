<template lang="">
    <hr>
<div class="container d-flex align-items-end">
        <img :src="currentImg" alt="展示圖片" class="w-50" />
        <button @click="nextImage()" class="btn btn-outline-dark ms-2">下一張</button>
</div>
    
</template>


<script setup>
    import { ref } from 'vue';

    const img1 = 'https://images.pexels.com/photos/32856466/pexels-photo-32856466.jpeg'
    const img2 = 'https://images.pexels.com/photos/10675271/pexels-photo-10675271.jpeg'
    const currentImg = ref(img1);

    const nextImage = () => {
        currentImg.value = (currentImg.value === img1) ? img2 : img1;
    };
</script>


<style lang="">

</style>