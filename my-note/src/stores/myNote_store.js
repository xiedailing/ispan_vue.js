import { defineStore } from 'pinia';

const STORAGE_KEY = 'my-note:notes'

const defaultNotes = () => ([
          {
            id: 1, 
            item: '去康是美', 
            content: '補生活用品',
            isFinished: true,
            isPinned: true
          },
            {
              id: 2, 
              item: '繳費', 
              content: '最晚9/22前要繳',
              isFinished: false,
              isPinned: true
            },
            {
              id: 3, 
              item: '訂餐廳', 
              content: '妹妹生日10/5',
              isFinished: false,
              isPinned: false
            },
            {
              id: 4, 
              item: '拉伸', 
              content: '拉伸身體舒緩壓力',
              isFinished: false,
              isPinned: false
            }
        ])

function loadNotes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch (e) {
    // 讀取失敗就使用預設資料
  }
  return defaultNotes()
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch (e) {
    // 儲存空間不可用時忽略
  }
}

export const useTodoStore = defineStore('todo', {
  state: () => ({ 
    keyword: '',
    notes: loadNotes(),
  }),

  getters: {
    filteredNotes(){
      const kw = this.keyword.trim().toLowerCase()
      const matched = kw
        ? this.notes.filter(note =>
            note.item.toLowerCase().includes(kw) || (note.content || '').toLowerCase().includes(kw))
        : this.notes
      // 釘選的排前面，其餘維持原本順序
      return [...matched].sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
    },

    pinnedNotes(){
      return this.notes.filter(note => note.isPinned)      
    },

    allNotes(){
      return this.notes.filter(note => !note.isPinned)
    }
  },

  actions: {
    deleteNote(id) {
      const index = this.notes.findIndex(note => note.id === id)

      if (index !== -1) {
        this.notes.splice(index, 1)
      }
    },

    pinnedNote(id){
      const pin_note = this.notes.find(note => note.id === id)
      if (pin_note) {
      pin_note.isPinned = !pin_note.isPinned;
      }
    },

    // 更新note
    updateNote(id, { item, content, isPinned, tasks }) {
      const note = this.notes.find(note => note.id === id)
      const title = item.trim()
      if (!note || !title) return false

      note.item = title
      note.content = content
      note.isPinned = isPinned
      note.tasks = tasks.map(task => ({ ...task }))
      return true
    },

    // 新增note
    addNote(item, content, tasks = []) {
      const title = item.trim()
      if (!title) return false

      this.notes.push({
        id: Date.now(),
        item: title,
        content,
        isFinished: false,
        isPinned: false,
        tasks: tasks.map(task => ({ ...task }))
      })
      return true
    }
  }
})