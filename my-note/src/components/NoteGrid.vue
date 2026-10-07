<template>
    <div class="container">
        <p v-if="!todoStore.filteredNotes.length" class="empty">
            {{ todoStore.keyword.trim() ? '找不到符合的筆記' : '還沒有筆記，點左邊「新增筆記」開始吧' }}
        </p>
        <div class="row g-4">
            <div class="col-4" v-for="note in todoStore.filteredNotes" :key="note.id">
                <RouterLink :to="{ name: 'NoteDetail', params: { id: note.id } }" class="sticky">
                    <div class="sticky-head">
                        <span class="label">TITLE:</span>
                        <span class="title">{{ note.item }}</span>
                        <i class="fa-solid fa-thumbtack tack" :class="{ pinned: note.isPinned }"></i>
                    </div>
                    <div class="sticky-body">
                        <span class="label">NOTE:</span>
                        <p>{{ note.content }}</p>
                    </div>
                    <div v-if="note.tasks && note.tasks.length" class="progress-line">
                        <i class="fa-regular fa-square-check"></i>
                        {{ note.tasks.filter(t => t.isFinished).length }}/{{ note.tasks.length }}
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { useTodoStore } from '../stores/myNote_store'

    const todoStore = useTodoStore();
</script>


<style scoped>
    .sticky {
        display: block;
        text-decoration: none;
        position: relative;
        min-height: 200px;
        padding: 18px 16px;
        text-align: left;
        color: #1c1c1c;
        background: #fbf1dd;
        font-family: 'DIN Alternate', 'Arial Narrow', 'Noto Sans TC', sans-serif;
        font-size: 16px;
        letter-spacing: 0.06em;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 10px 18px -6px rgba(0, 0, 0, 0.3);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .sticky:hover {
        transform: translateY(-3px) rotate(-0.6deg);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 16px 24px -8px rgba(0, 0, 0, 0.35);
    }
    .label {
        font-weight: 700;
        margin-right: 6px;
    }
    .sticky-head {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0 0 8px 0;
        border-bottom: 1.5px solid #1c1c1c;
        margin-bottom: 10px;
    }
    .title {
        font-size: 18px;
        font-weight: 600;
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .sticky-body p {
        display: inline;
        font-size: 18px;
        letter-spacing: 0.02em;
        line-height: 1.6;
    }
    .progress-line {
        margin-top: 12px;
        font-size: 14px;
        opacity: 0.7;
    }
    .empty {
        padding: 40px 0;
        text-align: center;
        opacity: 0.6;
    }
    .tack {
        flex-shrink: 0;
        margin-left: auto;
        font-size: 16px;
        opacity: 0.25;
    }
    .tack.pinned {
        color: #d62828;
        opacity: 1;
    }
</style>
