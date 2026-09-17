import { defineStore } from 'pinia'

export const useNoteStore = defineStore('notes', {
  state: () => ({
    notes: [
      {
        id: 1,
        title: '旅行計畫',
        content: '明年暑假想去東京旅遊，準備好機票和住宿了。',
        pinned: false,
        items: [
          { text: '訂機票', done: true },
          { text: '訂飯店', done: true },
          { text: '安排行程', done: false }
        ]
      },
      { id: 2, title: '學習計畫', content: '每天晚上花一小時學習新技術，提升自己的能力。', pinned: false, items: [] },
      { id: 3, title: '閱讀計畫', content: '今年計劃閱讀十本書，已經看完了三本。', pinned: false, items: [] },
      { id: 4, title: '運動計畫', content: '每周至少三次運動，保持身體健康。', pinned: true, items: [] },
      { id: 5, title: '工作計畫', content: '本週目標是完成所有的專案任務，並準時提交給客戶。', pinned: true, items: [] }
    ],
    keyword: '',
    searchResults: []
  }),
  getters: {
    // 剛新增筆記、還沒輸入標題時先不顯示在清單/牆上
    visibleNotes(state) {
      return state.notes.filter(note => note.title.trim() !== '')
    },
    pinnedNotes() {
      return this.visibleNotes.filter(note => note.pinned)
    },
    allNotes() {
      return this.visibleNotes.filter(note => !note.pinned)
    }
  },
  actions: {
    // 新增一筆筆記，回傳新筆記物件，讓元件拿得到它的 id 繼續編輯
    addNote(title, content) {
      const newNote = {
        id: this.notes.length ? Math.max(...this.notes.map(note => note.id)) + 1 : 1,
        title,
        content,
        pinned: false,
        items: []
      }
      this.notes.push(newNote)
      return newNote
    },
    editNote(id, title, content) {
      const note = this.notes.find(note => note.id === id)
      if (note) {
        note.title = title
        note.content = content
      }
    },
    deleteNote(id) {
      const index = this.notes.findIndex(note => note.id === id)
      if (index !== -1) {
        this.notes.splice(index, 1)
      }
    },
    markedPinned(id) {
      const note = this.notes.find(note => note.id === id)
      if (note) note.pinned = !note.pinned
    },
    // 待辦項目：一筆筆記底下可以有多個 checkbox 項目
    addItem(noteId, text) {
      const note = this.notes.find(note => note.id === noteId)
      if (note && text.trim() !== '') {
        note.items.push({ text: text.trim(), done: false })
      }
    },
    toggleItem(noteId, itemIndex) {
      const note = this.notes.find(note => note.id === noteId)
      if (note && note.items[itemIndex]) {
        note.items[itemIndex].done = !note.items[itemIndex].done
      }
    },
    removeItem(noteId, itemIndex) {
      const note = this.notes.find(note => note.id === noteId)
      if (note) note.items.splice(itemIndex, 1)
    },
    searchNotes(keyword) {
      this.keyword = keyword.toLowerCase()
      this.searchResults = this.notes.filter(note =>
        note.title.toLowerCase().includes(this.keyword) ||
        note.content.toLowerCase().includes(this.keyword)
      )
    }
  }
})
