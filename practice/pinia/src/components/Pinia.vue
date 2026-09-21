<template>
    <h2>Pinia 練習</h2>
    <!-- 加上 index 變數與 :key -->
    <div class="box">
        <h2>代辦清單</h2>
        <input type="text" class="add-input" v-model="new_item" @keydown.enter="todoStore.addTask(new_item); new_item = ''" placeholder="請輸入代辦事項">
        <div v-for="(task, index) in todoStore.unFinishedTasks">
        <input 
            type="checkbox" 
            :checked="task.isFinished" 
            @change="todoStore.toggleTask(index)"
        >
        <span class="task" :class="{'finished-line': task.isFinished}">
            {{ task.item }}
        </span>
        <button @click="todoStore.deleteTask(i)">刪除</button>
    </div>
        <hr>
        <h3>已完成事項</h3>
        <p class="finished-note" v-for="finishedTask in todoStore.completedTask">{{ finishedTask.item }}</p>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todo_store';

const todoStore = useTodoStore();
const new_item = ref('');

console.log(todoStore.tasks);
</script>

<style scoped>
    h2 {
        margin-top: 50px;
    }

    .task {
        font-size: 20px;
        margin-right: 16px;
    }

    .finished-line {
        text-decoration: line-through;
    }

    .finished-note {
        color: #575757;
    }

    .add-input {
        font-size: 20px;
        border-radius: 8px;
        width: 200px;
        height: 30px;
        border: 1px solid rgb(97, 90, 80);
        margin-bottom: 10px;
    }

</style>