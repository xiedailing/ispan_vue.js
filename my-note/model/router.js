import { createRouter, createWebHistory } from 'vue-router';
import NoteGrid from '../src/components/NoteGrid.vue';
import AddNote from '../src/components/AddNote.vue';
import NoteDetail from '../src/components/NoteDetail.vue';


const routes = [
    {path:'/', name:'home', component: NoteGrid},
    {path:'/AddNote', name:'AddNote', component: AddNote},
    {path:'/note/:id', name:'NoteDetail', component: NoteDetail}
];


const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;