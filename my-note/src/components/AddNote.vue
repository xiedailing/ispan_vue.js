<template lang="">
    <div class="card p-4">
        <div class="mb-3">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入標題..." v-model="title">
    </div>
    <div class="mb-3">
        <textarea class="form-control" name="" id="" rows="5" placeholder="請輸入內容..." v-model="content" @change="addNote()"></textarea>
    </div>

        <div class="mb-3 text-start">
            <hr class="mb-3">
            <h4><i class="fa-solid fa-list-check"></i> 代辦事項</h4>
            
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="請輸入代辦事項" v-model="new_item" @keydown.enter="todoStore.addTask(new_item); new_item = ''">

            </div>

            <div v-for="(task, i) in todoStore.unFinishedTasks" class="d-flex justify-content-between" :key="task.id">
                <input 
                type="checkbox" 
                class="form-check-input me-1"
                :checked="task.isFinished"
                @change="todoStore.toggleTask(i)"
                >
                <span class="w-100 mb-2" :class="{'finished-line': task.isFinished}">
                    {{ task.item }}
                </span>
                <p class="w-100"></p>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
    



</template>


<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/myNote_store'

const todoStore = useTodoStore()
const new_item = ref('')

const title = ref('')
const content = ref('')


</script>


<style scoped>
    .fa-xmark:hover{
        color: antiquewhite;
        width: 20px;
        height: 20px;
        background-color: brown;
        border-radius: 6px;
    }

    .finished-line {
        text-decoration: line-through;
    }
</style>