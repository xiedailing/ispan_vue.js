import { createWebHistory, createRouter } from "vue-router";
import Cart from "./components/Cart.vue";
import Product from "./components/Products.vue";

const routes = [
    { path: "/cart", component: Cart, name: "cart" },
    { path: "/product", component: Product, name: "product" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;