<template lang="">
    <div class="products mb-2">
        <span class="me-2">
            {{ fruitName }} - 一斤 {{ price }} 元
        </span>
        <button class="btn btn-secondary" @click="addToCart">
            加入購物車
        </button>
    </div>
</template>


<script setup>
    import { defineProps, defineEmits, ref } from 'vue';
    const props = defineProps({
        fruitName: String,
        price: Number
    });
    const emit = defineEmits(['addToCart']);
    const addToCart = () => {
        emit('addToCart', props.price)
    };
</script>


<style lang="">
    
</style>