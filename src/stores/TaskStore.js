import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'Task 1',
                description: 'Description 1',
                isFav: false
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Description 2',
                isFav: true
            },
            {
                id: 3,
                title: 'Task 3',
                description: 'Description 3',
                isFav: true
            }
        ],
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0);
        },
        totalCount: (state) => {
            return state.tasks.length
        }

    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            });
        },
        toggleFavTask(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})