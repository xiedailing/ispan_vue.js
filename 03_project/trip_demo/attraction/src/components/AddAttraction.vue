<template>
  <div class="justify-content-start w-100 mb-4">
      <form @submit.prevent="saveAttraction">
        <div class="form-group d-flex justify-content-start align-items-center mb-3">
          <img :src="previewImageUrl" class="spot-image new-image me-3">
          <input type="file" id="attractionImage" class="form-control" @change="handleImageChange" >
        </div>
        <div class="form-group d-flex align-items-center justify-content-between mb-3">
          <input type="text" id="attractionName" class="form-control" v-model="attractionName">
        </div>
        <!-- Buttons -->
        <div class="d-flex align-items-center justify-content-end">
          <button type="submit" class="btn btn-primary me-3"><i class="fa-solid fa-floppy-disk"></i></button>
          <button @click="closeAddForm" class="btn btn-outline-secondary"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </form>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { useAttractionStore } from '../stores/attractionStores'
const store = useAttractionStore();
const attractionName = ref('');
const attractionImage = ref(null);
let previewImageUrl = ref(null);

const saveAttraction = async () => {
  try {
    let imageName = attractionImage.value
    // 將圖片透過api上傳
    // if (attractionImage.value) {
    //   const formData = new FormData()
    //   formData.append('image', attractionImage.value)
    //   const response = await axios.post('/api/upload', formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' }
    //   })
    //   imageName = response.data.filename // 假設後端返回 { filename: 'image.jpg' }
    // }
    store.addItem({ name: attractionName.value, image: imageName })
    attractionName.value = ''
    attractionImage.value = null
    previewImageUrl.value = null
  } catch (error) {
    console.error('圖片上傳失敗:', error)
  }
}

// 選取並在指定元件上預覽圖片
const handleImageChange = (event) => {
  const file = event.target.files[0]
  attractionImage.value = file || null
  previewImageUrl.value = file ? URL.createObjectURL(file) : null
}
const closeAddForm = () => {
  attractionName.value = ''
  attractionImage.value = null
  previewImageUrl.value = null
  // 假設父組件控制表單顯示，發出事件通知父組件關閉
  // 若直接在 AttractionList.vue 控制，需透過 emit 或 store 處理
}
</script>

<style scoped>

.spot-image {
  width: 200px; /* 請調整圖片寬度 */
  height: auto; /* 保持高度自動調整 */
  flex: 1;
}
</style>
