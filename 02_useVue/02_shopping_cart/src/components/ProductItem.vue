<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const props = defineProps({
  name: String,
  price: Number,
})

const emit = defineEmits(['add-to-cart'])
const addToCart = () => {
  emit('add-to-cart', props.price)
}

</script>

<template>
  <div class="product">
     <span>{{ name }} - 一斤 {{price}} 元</span>&nbsp;&nbsp;
    <button @click="addToCart">加入購物車</button>
  </div>

</template>

<style scoped>
span{
  display: inline-block;
  margin-bottom: 20px;
}
</style>
