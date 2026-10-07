<template>
    <div
        v-if="confirmState.open"
        class="backdrop"
        @click.self="answerConfirm(false)"
        @keydown.esc="answerConfirm(false)"
    >
        <div class="dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-message">
            <p id="confirm-message" class="message">{{ confirmState.message }}</p>
            <div class="actions">
                <button ref="cancelBtn" type="button" class="btn-flat" @click="answerConfirm(false)">取消</button>
                <button type="button" class="btn-flat danger" @click="answerConfirm(true)">{{ confirmState.confirmText }}</button>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref, watch, nextTick } from 'vue';
    import { confirmState, answerConfirm } from '../composables/useConfirm'

    const cancelBtn = ref(null);

    // 開啟時預設聚焦在「取消」，避免誤按 Enter 就刪除
    watch(() => confirmState.open, async (open) => {
        if (!open) return;
        await nextTick();
        if (cancelBtn.value) cancelBtn.value.focus();
    });
</script>


<style scoped>
    .backdrop {
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(28, 28, 28, 0.45);
    }
    .dialog {
        width: 100%;
        max-width: 380px;
        padding: 22px 24px;
        text-align: left;
        color: #1c1c1c;
        background: #fbf1dd;
        font-family: 'DIN Alternate', 'Arial Narrow', 'Noto Sans TC', sans-serif;
        font-size: 18px;
        letter-spacing: 0.04em;
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
    }
    .message {
        padding-bottom: 14px;
        margin-bottom: 18px;
        border-bottom: 1.5px solid #1c1c1c;
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .btn-flat {
        padding: 8px 22px;
        border: 1.5px solid #1c1c1c;
        background: transparent;
        color: #1c1c1c;
        font: inherit;
        font-size: 16px;
        letter-spacing: 0.15em;
        white-space: nowrap;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease;
    }
    .btn-flat:hover {
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
</style>
