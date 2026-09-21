import { createRouter, createWebHistory } from 'vue-router'

import Test1 from '../components/Test1.vue'
import Test2 from '../components/Test2.vue'
import Event from '../components/Event.vue'
import Computed from '../components/Computed.vue';
import Watch from '../components/Watch.vue';
import Gallery from '../components/Gallery.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

const routes = [
    { path: '/', name: 'Test1', component: Test1},
    { path: '/Test2', name: 'Test2', component: Test2},
    { path: '/Event', name: 'Event', component: Event},
    { path: '/Computed', name: 'Computed', component: Computed},
    { path: '/Watch', name: 'Watch', component: Watch},
    { path: '/Gallery', name: 'Gallery', component: Gallery},
    { path: '/ShoppingCart', name: 'ShoppingCart', component: ShoppingCart}
];

const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;