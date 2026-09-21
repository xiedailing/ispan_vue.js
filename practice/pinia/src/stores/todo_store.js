import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    // ref
    state: () => ({
        tasks: [
            {id: 1, item: '買衛生紙', isFinished: false},
            {id: 2, item: '繳電話費', isFinished: false},
            {id: 3, item: '訂餐廳', isFinished: false}
        ]
        }),
    
    // computed
    getters: {

    },

    // function
    actions: {

    },
})