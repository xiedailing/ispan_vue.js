<template>
    <div class="container mt-4">
        <div class="main-image-box mb-3 text-center">
            <img :src="currentImage" alt="主圖展示" class="img-fluid main-img" />
        </div>
        <div class="d-flex gap-2">
            <div v-for="(img, index) in images" :key="index" class="flex-fill">
                <img :src="img" @click="currentImage = img" class="img-fluid thumbnail" :class="{ 'active-border': currentImage === img }"alt=""/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
    'https://images.pexels.com/photos/3043590/pexels-photo-3043590.jpeg',
    'https://images.pexels.com/photos/14657304/pexels-photo-14657304.jpeg',
    'https://images.pexels.com/photos/39425069/pexels-photo-39425069.jpeg',
    'https://images.pexels.com/photos/9385970/pexels-photo-9385970.jpeg'
]);
const currentImage = ref(images.value[0]);
</script>

<style scoped>
.main-img {
    max-height: 600px;
    width: 100%;
    object-fit: cover;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.thumbnail {
    height:180px;
    width: 100%;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: all 0.2s ease;
}

.thumbnail:hover {
    opacity: 0.8;
}


.active-border {
    border-color: #133162;
    text-decoration: 5px
}
</style>