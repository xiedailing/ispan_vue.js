import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import AttractionList from "./components/AttractionList.vue";
import AddAttraction from "./components/AddAttraction.vue";

const routes = [
    { path: "/", name:'home', component: AttractionList },
    { path: "/add", component: AddAttraction, name: "add" }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;