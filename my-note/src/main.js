import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../model/router.js'
import { createPinia } from 'pinia'
import { useTodoStore, saveNotes } from './stores/myNote_store'

const app = createApp(App)
app.use(router)
app.use(createPinia())

const todoStore = useTodoStore()
todoStore.$subscribe(() => saveNotes(todoStore.notes))
app.mount('#app')

