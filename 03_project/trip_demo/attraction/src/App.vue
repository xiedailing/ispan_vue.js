
<script setup>
import { onUpdated, ref } from 'vue';
import AttractionList from './components/AttractionList.vue'
import AddAttraction from './components/AddAttraction.vue';


const showAddNewItem = ref(false);

// 顯示新增表單
const showAddForm = () => {
  showAddNewItem.value = true;
};
// 關閉新增表單
const handleCloseAddForm = () => {
  // 關閉 AddNote 組件並將 showAddNewNote 設置為 false
  showAddNewItem.value = false;
};

const handleSpotAdded = (spotData) => {
  // Handle the added spot data here
  spots = spotData;
  console.log('New spot added:', spotData);
};
onUpdated(() =>{
  console.log('update');
  //spots = JSON.parse(localStorage.getItem('attractions'));
});
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-end justify-content-between mb-4">
          <!-- Logo -->
            <img src="/logo.png" alt="Logo" class="logo">
            <button class="btn btn-secondary" @click="showAddForm">
              <i class="fas fa-plus"></i> 新增
            </button>
        </div>
      </div>
      <div class="col-12">
        <AddAttraction v-if="showAddNewItem"></AddAttraction>
        <AttractionList></AttractionList>
      </div>
      
      
    </div>
  </div>
</template>


<style scoped>
.logo {
  width: 100px; /* 請替換成您的logo寬度 */
}
.container {
  margin-top: 50px;
  max-width: 462px;
}

</style>
