<template lang="">
    <div class="card p-4">
        <div class="mb-3">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入標題...">
    </div>
    <div class="mb-3">
        <textarea class="form-control" name="" id="" rows="5" placeholder="請輸入內容..."></textarea>
    </div>

        <div class="mb-3 text-start">
            <hr class="mb-3">
            <h4><i class="fa-solid fa-list-check"></i> 代辦事項</h4>
            
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="請輸入代辦事項" v-model="new_item"  @keydown.enter="useTodoStore.addTask(new_item); new_item=''">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">新增</button>
            </div>

            <div class="d-flex justify-content-between">
                <input type="checkbox" class="form-check-input me-1">
                <p class="w-100">項目一</p>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
    



</template>


<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/myNote'
const todoStore = useTodoStore()
const new_item = ref('')


</script>


<style scoped>
    .fa-xmark:hover{
        color: antiquewhite;
        width: 20px;
        height: 20px;
        background-color: brown;
        border-radius: 6px;
    }
</style>