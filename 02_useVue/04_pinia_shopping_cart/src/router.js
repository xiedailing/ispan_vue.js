import { createRouter, createWebHistory } from 'vue-router'
import ProductItem from './components/ProductItem.vue'
const routes = [
  { path: '/', name: 'product', component: ProductItem },
 

]

const router = createRouter({
  routes, 
  history: createWebHistory()
})

export default router