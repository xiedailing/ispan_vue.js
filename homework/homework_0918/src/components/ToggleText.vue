<template lang="">
    <hr>
    <div class="container">
        <p v-if="isVisible" class="mb-1">Good Afternoon</p>
        <button @click="toggleText()" class="btn btn-outline-dark">
            {{ isVisible ? '隱藏' : '顯示'}}
        </button>
    </div>

</template>


<script setup>
    import { ref } from 'vue';

    const isVisible = ref(true);
    
    function toggleText(){
        isVisible.value = !isVisible.value;
    };

</script>


<style lang="">
    
</style>