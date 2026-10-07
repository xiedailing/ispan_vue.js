<template>
    <div v-if="!draft" class="missing">
        <p>找不到這則筆記</p>
        <RouterLink to="/" class="btn-flat ghost">回到首頁</RouterLink>
    </div>

    <div v-else class="paper">
        <div class="paper-head">
            <span class="label">TITLE:</span>
            <input class="title-input" type="text" v-model="draft.item" placeholder="請輸入標題..." />
            <i
                class="fa-solid fa-thumbtack tack"
                :class="{ pinned: draft.isPinned }"
                @click="draft.isPinned = !draft.isPinned"
            ></i>
        </div>

        <div class="paper-section">
            <span class="label">NOTE:</span>
            <textarea class="content-input" rows="6" v-model="draft.content" placeholder="請輸入內容..."></textarea>
        </div>

        <div class="paper-section">
            <span class="label">TO DO <small v-if="draft.tasks.length">{{ doneCount }}/{{ draft.tasks.length }}</small></span>
            <input
                class="task-input"
                type="text"
                placeholder="新增待辦事項，按 Enter"
                v-model="newItem"
                @keydown.enter.prevent="addTask"
            />
            <ul class="tasks">
                <li v-for="(task, i) in draft.tasks" :key="task.id">
                    <input type="checkbox" class="form-check-input" v-model="task.isFinished" />
                    <span :class="{ done: task.isFinished }">{{ task.item }}</span>
                    <i class="fa-solid fa-xmark" @click="draft.tasks.splice(i, 1)"></i>
                </li>
            </ul>
        </div>

        <div class="paper-actions">
            <button class="btn-flat primary" :disabled="!draft.item.trim()" @click="save">儲存</button>
            <RouterLink to="/" class="btn-flat ghost">返回</RouterLink>
            <button class="btn-flat danger ms-auto" @click="remove">刪除</button>
        </div>
    </div>
</template>


<script setup>
    import { ref, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useTodoStore } from '../stores/myNote_store'

    const todoStore = useTodoStore();
    const route = useRoute();
    const router = useRouter();

    const id = Number(route.params.id);
    const note = todoStore.notes.find(n => n.id === id);

    // 編輯用副本，按儲存才寫回 store
    const draft = ref(note ? {
        item: note.item,
        content: note.content,
        isPinned: note.isPinned,
        tasks: (note.tasks || []).map(t => ({ ...t }))
    } : null);

    const newItem = ref('');
    const doneCount = computed(() => draft.value.tasks.filter(t => t.isFinished).length);

    function addTask() {
        const item = newItem.value.trim();
        if (!item) return;
        draft.value.tasks.push({ id: Date.now(), item, isFinished: false });
        newItem.value = '';
    }

    function save() {
        if (todoStore.updateNote(id, draft.value)) {
            router.push('/');
        }
    }

    function remove() {
        if (!confirm(`確定要刪除「${draft.value.item}」嗎？`)) return;
        todoStore.deleteNote(id);
        router.push('/');
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
    .tasks i,
    .tack {
        cursor: pointer;
        opacity: 0.4;
        transition: opacity 0.15s ease, color 0.15s ease;
    }
    .tasks i:hover {
        opacity: 1;
        color: #a3321f;
    }
    .tack:hover {
        opacity: 0.8;
    }
    .tack.pinned {
        color: #d62828;
        opacity: 1;
    }
    .paper-actions {
        display: flex;
        gap: 10px;
        padding-top: 14px;
        border-top: 1.5px solid #1c1c1c;
    }

    .btn-flat {
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
    .btn-flat.danger {
        border-color: #a3321f;
        color: #a3321f;
    }
    .btn-flat.danger:hover {
        background: #a3321f;
        color: #fbf1dd;
    }
    .missing {
        padding: 40px 0;
    }
    .missing p {
        margin-bottom: 16px;
    }
</style>
