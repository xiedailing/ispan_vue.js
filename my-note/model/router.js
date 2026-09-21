import { createRouter, createWebHistory } from 'vue-router';
import NoteGrid from '../src/components/NoteGrid.vue';
import AddNote from '../src/components/AddNote.vue';


const routes = [
    {path:'/', name:'home', component: NoteGrid},
    {path:'/AddNote', name:'AddNote', component: AddNote}
];


const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;