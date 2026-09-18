<template>
<div class="justify-content-center w-100">
    <div class="list-group w-100">
        <div v-for="(spot, index) in store.items" :key="index" :class="['list-group-item', { 'selected': showAddFormIndex === index }]">
            <div class="d-flex align-items-center justify-content-between">
              <div class="spot-item"  @click="showAddForm(index)">
                <img :src="'/imgs/'+spot.image" :alt="spot.name" class="spot-image">
                <span class="spot-name">{{ spot.name }}</span>
              </div>
              
              <button @click="store.handleDelete(index)" class="btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div v-if="showAddFormIndex === index" class="add-note-form w-100">
              <hr>
              <form @submit.prevent="saveAttraction(index)" class="d-flex align-items-start justify-content-between flex-column">
                <div class="form-group d-flex justify-content-start align-items-center mb-3">
                  <img :src="previewImageUrl" :alt="spot.name" class="spot-image new-image me-3">
                  <input type="file" id="attractionImage" class="form-control" @change="handleImageChange">
                </div>
                <div class="form-group d-flex align-items-center justify-content-between mb-3">
                  <input type="text" id="attractionName" class="form-control" :value="spot.name">
                </div>
                <!-- Buttons -->
                <div class="d-flex align-items-center justify-content-end align-self-end">
                  <button type="submit" class="btn btn-primary me-3"><i class="fa-solid fa-floppy-disk"></i></button>
                  <button @click="hideAddForm" type="button" class="btn btn-outline-secondary"><i class="fa-solid fa-xmark"></i></button>
                </div>
              </form>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {onBeforeMount, ref, defineEmits } from 'vue'
import axios from 'axios'
import { useAttractionStore } from '../stores/attractionStores'
const showAddFormIndex = ref(null);
let previewImageUrl = ref(null);
const store = useAttractionStore()
// 選取並在指定元件上預覽圖片
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Generate preview image URL
    previewImageUrl.value = URL.createObjectURL(file);
  } 
};
// 顯示編輯表單
const showAddForm = (index) => {
  showAddFormIndex.value = index;
  previewImageUrl.value = `/imgs/${store.items[index].image}`;
};

// 隱藏編輯表單
const hideAddForm = () => {
  showAddFormIndex.value = null;
  console.log(showAddFormIndex.value);
};

const saveAttraction = (index) => {
  const attraction = {
    name: attractionName.value,
    image: attractionImage.value
  };

  store.items[index].name = attraction.name
  if(attraction.image != null) store.items[index].image = attraction.image
  showAddFormIndex.value = null;

  // 清空表單
  attractionName.value = '';
  attractionImage.value = null;
};
onBeforeMount(async() => {
  try {
  const response = await axios.get('/json/attraction.json')
  store.loadItems(response.data)
} catch (error) {
  console.log('載入錯誤:', error)
}
})

</script>

<style scoped>
.spot-image {
  width: 100px; /* 請調整圖片寬度 */
  height: auto; /* 保持高度自動調整 */
}

.spot-name {
  flex: 1; 
}
.spot-item{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.list-group-item{
  transition: background-image 0.3s;
 
}
.list-group-item:hover{
  background-image: linear-gradient(to bottom, #ffffff, #f8f8fc, #f0f1f9, #e8ebf6, #dee5f3);
}
.add-note-form{
  transition: all 0.3s;
}
.selected{
  border: 2px solid #feb6b8;
}
</style>
