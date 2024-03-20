import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        Loading: false
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
        async getTasks() {
            // const res = await axios.get('http://localhost:3000/tasks');
            this.Loading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data
            this.Loading = false
        },
        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            })
            if (res.error) {
                console.log(res.error)
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            });
            const res = await fetch('http://localhost:3000/tasks' + id, {
                method: 'DELETE',

            })
            if (res.error) {
                console.log(res.error)
            }
        },
        async toggleFavTask(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav

            const res = await fetch('http://localhost:3000/tasks' + id, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ isFav: task.isFav })
            })
            if (res.error) {
                console.log(res.error)
            }
        }
    }
})