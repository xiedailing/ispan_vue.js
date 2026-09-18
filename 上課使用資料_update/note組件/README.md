# note 專案 — 元件骨架（上課用）

對應正式專案：[03_project/note](../../03_project/note)。

這裡的每個 `.vue` 檔案都只保留 **`<template>`（HTML 結構）跟 `<style scoped>`（CSS 樣式）**，
`<script setup>` 只留下 2-3 行重點提示，實際邏輯留給同學上課時自己寫，
這樣同學可以專心練習 Vue 的邏輯（ref、watch、store 呼叫…），不用重新排版面、調樣式。

## 元件清單

| 檔案 | 對應正式專案 | 說明 |
|---|---|---|
| `App.vue` | `src/App.vue` | 整體版面（header/sidebar/main），沒有邏輯可寫，直接照抄即可 |
| `components/ToolBar.vue` | `src/components/ToolBar.vue` | 頂部工具列，搜尋表單 |
| `components/NoteList.vue` | `src/components/NoteList.vue` | 側欄清單（重要／全部）+ 刪除確認彈窗 |
| `components/NoteGrid.vue` | `src/components/NoteGrid.vue` | 便利貼佈告欄（筆記牆） |
| `components/AddNote.vue` | `src/components/AddNote.vue` | 新增／編輯筆記共用元件（含待辦項目） |
| `components/SearchNote.vue` | `src/components/SearchNote.vue` | 搜尋結果頁 |

> `AddNote.vue` 舊名是 `NoteEditor.vue`，因為 `/add`、`/edit/:id` 兩條路由共用同一個元件，
> 教材統一改稱 `AddNote.vue`，正式專案已同步改名。

## 使用前提

把這些檔案放進專案時，記得專案本身要先有：

- **全域 CSS 變數**：`--panel-bg`、`--accent`、`--muted`、`--radius`、`--shadow` 等，定義在 [style.css](../../03_project/note/src/style.css)。
- **Font Awesome 圖示字型**：在 `index.html` 用 CDN 掛載（[03_project/note/index.html](../../03_project/note/index.html) 有範例）。
- **Pinia store**：[NoteStore.js](../../03_project/note/src/stores/NoteStore.js)，`<script setup>` 的註解裡提到的 action／state 都定義在這裡。
- **Router**：`/`、`/add`、`/edit/:id`、`/search` 四條路由，範例在 [router.js](../../03_project/note/src/router.js)。

少了以上任何一項，畫面會缺樣式或圖示，`<script setup>` 空著時 console 也會出現「變數未定義」的錯誤——這是預期中的，等同學把邏輯補上就會恢復正常。
