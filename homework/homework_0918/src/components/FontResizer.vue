<template lang="">
    <hr>
    <div class="container py-5">
        <p :style="{fontSize: fontSize + 'px'}">字級：{{ fontSize }}px</p>

        <button @click="zoomIn" class="btn btn-primary me-2">變大(+2px)</button>
        <button @click="zoomOut" class="btn btn-secondary">變小(-2px)</button>

    </div>
</template>


<script setup>
    import { ref } from 'vue';

    const fontSize = ref(16);
    const zoomIn = () => {
        fontSize.value +=2;
    };
    const zoomOut = () => {
        if (fontSize.value > 8) {
        fontSize.value -= 2;
        }
    }

</script>


<style lang="">
    
</style>