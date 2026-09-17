<script setup>
import ProductItem from './components/ProductItem.vue'
import { ref } from 'vue'
const totalPrice = ref(0)
const updateTotal = (price) => {
  totalPrice.value += price
}
</script>

<template>
  <div>
    <ProductItem name="蘋果" :price="30" @add-to-cart="updateTotal"></ProductItem>
    <ProductItem name="香蕉" :price="20" @add-to-cart="updateTotal"></ProductItem>
    <ProductItem name="橘子" :price="25" @add-to-cart="updateTotal"></ProductItem>
    <h2>🛒 購物總金額:{{ totalPrice }}元</h2>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
