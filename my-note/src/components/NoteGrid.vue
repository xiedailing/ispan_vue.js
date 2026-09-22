<template lang="">
    <div class="container">
        <div class="row g-3">
            <div class="col-4" v-for="note in todoStore.notes">
                <div class="card">
                    <div class="card-body">
                        <i v-if="note.isPinned" class="fa-solid fa-thumbtack me-2 pinned"></i>
                        <i v-else class="fa-solid fa-thumbtack me-2"></i>
                        <h5 class="card-title">{{ note.item }}</h5>
                        <p class="card-text">{{ note.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
    .fa-thumbtack {
        position: absolute;
        left: 5px;
        top: 10px
    }
</style>