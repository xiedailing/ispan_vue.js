import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    // ref
    state: () => ({
        tasks: [
            {id: 1, item: '買衛生紙', isFinished: true},
            {id: 2, item: '繳電話費', isFinished: false},
            {id: 3, item: '訂餐廳', isFinished: false}
        ]
        }),
    
    // computed
    getters: {
        completedTask(state){
            console.log(state);
            return state.tasks.filter(task => task.isFinished)
        },
        unFinishedTasks: (state) => state.tasks.filter(task => !task.isFinished)
    },

    // function
    actions: {
        toggleTask(i){
            this.tasks[i].isFinished = !this.tasks[i].isFinished
        },
        // 更安全的寫法
        // Pinia Store
        // actions: {
        //     toggleTask(id) {
        //         const target = this.tasks.find(item => item.id === id);
        //         if (target) {
        //             target.isFinished = !target.isFinished;
        //         }
        //     }
        // }

        addTask(item){
            if(!item) return;

            this.tasks.push({
                id: this.tasks[this.tasks.length -1].id + 1,
                item: item,
                isFinished: false
            })
        },

        deleteTask(i){
            this.tasks.splice(i,1);
        }

    },
})

