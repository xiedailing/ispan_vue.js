import { createRouter, createWebHistory } from 'vue-router';

import Pinia from '../components/Pinia.vue';
import Axios from '../components/Axios.vue';

const routes = [
    {path:'/', name: 'Pinia', component: Pinia},
    {path:'/Axios', name: 'Axios', component: Axios}
];

const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;