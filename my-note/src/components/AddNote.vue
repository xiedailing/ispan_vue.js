<template>
    <div class="paper">
        <div class="paper-head">
            <span class="label">TITLE:</span>
            <input class="title-input" type="text" placeholder="請輸入標題..." v-model="title" />
        </div>

        <div class="paper-section">
            <span class="label">NOTE:</span>
            <textarea class="content-input" rows="6" placeholder="請輸入內容..." v-model="content"></textarea>
        </div>

        <div class="paper-section">
            <span class="label">TO DO <small v-if="tasks.length">{{ doneCount }}/{{ tasks.length }}</small></span>
            <input
                class="task-input"
                type="text"
                placeholder="新增待辦事項，按 Enter"
                v-model="new_item"
                @keydown.enter.prevent="addTask"
            />
            <ul class="tasks">
                <li v-for="(task, i) in tasks" :key="task.id">
                    <input type="checkbox" class="form-check-input" v-model="task.isFinished" />
                    <span :class="{ done: task.isFinished }">{{ task.item }}</span>
                    <button type="button" class="icon-btn" :aria-label="'刪除待辦 ' + task.item" @click="tasks.splice(i, 1)"><i class="fa-solid fa-xmark"></i></button>
                </li>
            </ul>
        </div>

        <div class="paper-actions">
            <button class="btn-flat primary" :disabled="!title.trim()" @click="saveNote">儲存筆記</button>
            <RouterLink to="/" class="btn-flat ghost">取消</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoStore } from '../stores/myNote_store'

const todoStore = useTodoStore()
const router = useRouter()
const new_item = ref('')

const tasks = ref([])
const doneCount = computed(() => tasks.value.filter(t => t.isFinished).length)
function addTask(){
    const item = new_item.value.trim()
    if (!item) return

    tasks.value.push({
        id: Date.now(),
        item,
        isFinished: false
    })

    new_item.value=""
}

const title = ref('')
const content = ref('')
function saveNote(){
    if (!title.value.trim()) return

    addTask()

    const success = todoStore.addNote(
        title.value,
        content.value,
        tasks.value
    )

    if (success) {
        title.value= ''
        content.value= ''
        new_item.value= ''
        tasks.value=[]
        router.push('/')
    }

}

</script>


<style scoped>
    .paper {
        padding: 24px 28px;
        text-align: left;
        color: #1c1c1c;
        background: #fbf1dd;
        font-family: 'DIN Alternate', 'Arial Narrow', 'Noto Sans TC', sans-serif;
        font-size: 18px;
        letter-spacing: 0.04em;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 10px 18px -6px rgba(0, 0, 0, 0.3);
    }
    .label {
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.1em;
    }
    .label small {
        margin-left: 6px;
        font-weight: 400;
    }
    .paper-head {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 8px;
        border-bottom: 1.5px solid #1c1c1c;
        margin-bottom: 18px;
    }
    .title-input,
    .content-input,
    .task-input {
        width: 100%;
        border: 0;
        outline: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        letter-spacing: inherit;
    }
    .title-input {
        font-size: 20px;
        font-weight: 600;
    }
    .content-input {
        display: block;
        resize: vertical;
        line-height: 1.8;
        margin-top: 4px;
        background-image: repeating-linear-gradient(
            transparent, transparent calc(1.8em - 1px), rgba(28, 28, 28, 0.3) calc(1.8em - 1px), rgba(28, 28, 28, 0.3) 1.8em);
    }
    .paper-section {
        margin-bottom: 22px;
    }
    .task-input {
        margin-top: 6px;
        padding: 6px 0;
        border-bottom: 1px solid rgba(28, 28, 28, 0.35);
    }
    .tasks {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .tasks li {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 0;
        border-bottom: 1px solid rgba(28, 28, 28, 0.2);
    }
    .tasks span {
        flex: 1;
    }
    .tasks .done {
        text-decoration: line-through;
        opacity: 0.5;
    }
    .tasks .icon-btn {
        cursor: pointer;
        opacity: 0.4;
        transition: opacity 0.15s ease, color 0.15s ease;
    }
    .tasks .icon-btn:hover {
        opacity: 1;
        color: #a3321f;
    }
    .paper-actions {
        display: flex;
        gap: 10px;
        padding-top: 14px;
        border-top: 1.5px solid #1c1c1c;
    }
    .btn-flat {
        white-space: nowrap;
        padding: 8px 22px;
        border: 1.5px solid #1c1c1c;
        background: transparent;
        color: #1c1c1c;
        font: inherit;
        font-size: 16px;
        letter-spacing: 0.15em;
        text-decoration: none;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease;
    }
    .btn-flat.primary {
        background: #8a9a3b;
        border-color: #8a9a3b;
        color: #fbf1dd;
    }
    .btn-flat.primary:hover:not(:disabled) {
        background: #6b7a2a;
        border-color: #6b7a2a;
    }
    .btn-flat.primary:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
    .btn-flat.ghost:hover {
        background: #1c1c1c;
        color: #fbf1dd;
    }
    @media (max-width: 575.98px) {
        .paper {
            padding: 18px 16px;
        }
        .paper-actions {
            flex-wrap: wrap;
        }
    }
</style>
