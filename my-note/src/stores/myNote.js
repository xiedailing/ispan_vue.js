import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ 

   }),

  getters: {
    // 取得未完成的事項
    unFinishedTasks: (state) => state.tasks.filter(task => !task.isFinished),
    // 取得已完成的事項
    completedTask: (state) => state.tasks.filter(task => task.isFinished)
  },

  actions: {
    // 新增任務
    addTask(item) {
      if (!item || !item.trim()) return;

      // 💡 使用 Date.now() 當作 ID，避免陣列為空時爆錯
      this.tasks.push({
        id: Date.now(),
        item: item,
        isFinished: false
      });
    },

    // 切換完成狀態
    toggleTask(index) {
      this.tasks[index].isFinished = !this.tasks[index].isFinished;
    },

    // 刪除任務
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
})