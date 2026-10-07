<template>
    <RouterLink to="/AddNote" class="add-btn d-flex justify-content-center mb-3">新增筆記</RouterLink>

    <section class="panel priority">
        <h3>重要筆記</h3>
        <ul class="note-lines">
            <li v-if="!todoStore.pinnedNotes.length" class="empty">目前沒有重要筆記</li>
            <li v-for="note in todoStore.pinnedNotes" :key="note.id">
                <span class="dot"></span>
                <span class="name">{{ note.item }}</span>
                <span class="actions">
                    <i class="fa-solid fa-thumbtack pinned" @click="todoStore.pinnedNote(note.id)"></i>
                    <i class="fa-solid fa-trash-can" @click="removeNote(note)"></i>
                </span>
            </li>
        </ul>
    </section>

    <section class="panel all">
        <h3>所有筆記</h3>
        <ul class="note-lines">
            <li v-if="!todoStore.allNotes.length" class="empty">目前沒有筆記</li>
            <li v-for="note in todoStore.allNotes" :key="note.id">
                <span class="dot"></span>
                <span class="name">{{ note.item }}</span>
                <span class="actions">
                    <i class="fa-solid fa-thumbtack" @click="todoStore.pinnedNote(note.id)"></i>
                    <i class="fa-solid fa-trash-can" @click="removeNote(note)"></i>
                </span>
            </li>
        </ul>
    </section>
</template>


<script setup>
    import { useTodoStore } from '../stores/myNote_store'

    const todoStore = useTodoStore();

    function removeNote(note) {
        if (confirm(`確定要刪除「${note.item}」嗎？`)) {
            todoStore.deleteNote(note.id);
        }
    }
</script>
<style scoped>
    .add-btn {
        padding: 10px 0;
        background: #d9703a;
        color: #fbf1dd;
        font-weight: 700;
        letter-spacing: 0.2em;
        text-decoration: none;
        transition: background 0.2s ease;
    }
    .add-btn:hover {
        background: #c45f2b;
        color: #fff;
    }

    .panel {
        padding: 14px 16px 10px;
        margin-bottom: 16px;
        text-align: left;
        color: #1c1c1c;
        font-family: 'DIN Alternate', 'Arial Narrow', 'Noto Sans TC', sans-serif;
    }
    .priority {
        background: #b9c0d9;
    }
    .all {
        background: #e3bfd8;
    }

    h3 {
        margin: 0 0 8px;
        padding-bottom: 6px;
        border-bottom: 1.5px solid #1c1c1c;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.18em;
    }

    .note-lines {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .note-lines li {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 7px 0;
        border-bottom: 1px solid rgba(28, 28, 28, 0.35);
    }
    .note-lines .empty {
        opacity: 0.55;
    }
    .dot {
        flex-shrink: 0;
        width: 9px;
        height: 9px;
        border: 1.5px solid #1c1c1c;
        border-radius: 50%;
    }
    .name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .actions {
        display: flex;
        gap: 10px;
    }
    .actions i {
        opacity: 0.5;
        cursor: pointer;
        transition: color 0.15s ease, opacity 0.15s ease;
    }
    .actions i:hover {
        opacity: 1;
        color: #6b7a2a;
    }
    .actions .fa-trash-can:hover {
        color: #a3321f;
    }
    .actions .pinned {
        color: #d62828;
        opacity: 1;
    }
</style>
