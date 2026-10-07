<template>
    <div class="paper">
        <div class="paper-head">
            <span class="label">TITLE:</span>
            <span class="title">404</span>
        </div>
        <p class="message"><span class="label">NOTE:</span> 找不到這一頁，可能是網址打錯了。</p>
        <RouterLink to="/" class="btn-flat">回到首頁</RouterLink>
    </div>
</template>


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
    .paper-head {
        padding-bottom: 8px;
        border-bottom: 1.5px solid #1c1c1c;
        margin-bottom: 18px;
    }
    .title {
        margin-left: 8px;
        font-size: 20px;
        font-weight: 600;
    }
    .message {
        margin-bottom: 22px;
    }
    .btn-flat {
        display: inline-block;
        padding: 8px 22px;
        border: 1.5px solid #1c1c1c;
        color: #1c1c1c;
        font-size: 16px;
        letter-spacing: 0.15em;
        text-decoration: none;
        white-space: nowrap;
        transition: background 0.15s ease, color 0.15s ease;
    }
    .btn-flat:hover {
        background: #1c1c1c;
        color: #fbf1dd;
    }
    @media (max-width: 575.98px) {
        .paper {
            padding: 18px 16px;
        }
    }
</style>
