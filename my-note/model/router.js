import { createRouter, createWebHistory } from 'vue-router';
import NoteGrid from '../src/components/NoteGrid.vue';
import AddNote from '../src/components/AddNote.vue';
import NoteDetail from '../src/components/NoteDetail.vue';
import NotFound from '../src/components/NotFound.vue';


const routes = [
    {path:'/', name:'home', component: NoteGrid},
    {path:'/AddNote', name:'AddNote', component: AddNote},
    {path:'/note/:id', name:'NoteDetail', component: NoteDetail},
    {path:'/:pathMatch(.*)*', name:'NotFound', component: NotFound}
];


const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;