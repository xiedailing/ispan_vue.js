<script setup>
import { ref, reactive, watch } from 'vue'
import BMI from './components/BMI.vue'
const input_text = ref('')
const show_text = ref('')

const counter = reactive({
  count: 0
})

const increment = () => {
  counter.count++
}

const decrement = () => {
  counter.count--
}
const updateText = () => {
  show_text.value = input_text.value
}
// watch
const number = ref(0)
const parity = ref('')
watch(number, (newVal) => {
  parity.value = newVal % 2 === 0 ? '偶數' : '奇數'
})
</script>

<template>
  <router-link :to="{name: 'product'}" class="btn btn-primary me-2 mb-3">產品列表</router-link>
  <router-link :to="{name: 'cart'}" class="btn btn-primary me-2 mb-3">購物車</router-link>
  <router-view></router-view>
  <input type="text" v-model="input_text" class="form-control">
  <button @click="updateText" class="btn btn-primary mt-3">顯示文字</button>
  <p>{{ show_text }}</p>
  <p class="my-5">{{ counter.count }}</p>
  <button @click="increment" class="btn btn-primary me-2">增加</button>
  <button @click="decrement" class="btn btn-secondary">減少</button>
  <hr>
  <input type="text" v-model="number" class="form-control">
  <p class="my-5">您輸入的數字為 {{ parity }}</p>
  <hr>
  <BMI />
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
