<template lang="">
    <h2>Pinia 練習</h2>
    <div v-for="task in todoStore.tasks">
        <input type="checkbox" name="" id="">
        <span class="task">{{ task.item }}</span>

    </div>
</template>


<script setup>
import { useTodoStore } from '../stores/todo_store';

const todoStore = useTodoStore();
console.log(todoStore.tasks);
</script>


<style scoped>
    h2{
        margin-top: 50px;
    }

    .task{
        font-size: 20px;
    }

    .finished-line{
        text-decoration: line-through;
    }
</style>