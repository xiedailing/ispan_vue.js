<template lang="">
    <RouterLink to="/AddNote" class="btn btn-primary d-flex justify-content-center mb-2">新增筆記</RouterLink>

    <h3 class="text-start">重要筆記</h3>
    <ul class="list-group mb-4">
        <li class="list-group-item d-flex justify-content-between align-items-center " v-for="(note, index) in todoStore.pinnedNotes" :key="note.id">
            {{ note.item }}
        <div class="btn-group">
            <i class="fa-solid fa-thumbtack me-2 pinned" @click="todoStore.pinnedNote(note.id)"></i>
            <i 
            class="fa-solid fa-trash-can"
            @click="todoStore.deleteNote(note.id)"
            ></i>
        </div>
        </li>
    </ul>
    
    <h3 class="text-start">所有筆記</h3>
    <ul class="list-group mb-4">
        <li class="list-group-item d-flex justify-content-between align-items-center " v-for="(note, j) in todoStore.allNotes" :key="note.id">
            {{ note.item }}
        <div class="btn-group">
            <i class="fa-solid fa-thumbtack me-2" @click="todoStore.pinnedNote(note.id)"></i>
            <i 
            class="fa-solid fa-trash-can"
            @click="todoStore.deleteNote(note.id)"
            ></i>
        </div>
        </li>
    </ul>
</template>


<script setup>
    import { ref } from 'vue';
    import { useTodoStore } from '../stores/myNote_store'

    const todoStore = useTodoStore();
</script>
<style scoped>
    .pinned {
        color: red;
    }

    .btn-group i:hover {
        color: brown;
        cursor: pointer;
    }
</style>