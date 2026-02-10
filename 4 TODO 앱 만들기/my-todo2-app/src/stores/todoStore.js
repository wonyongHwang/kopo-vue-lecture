import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),

  getters: {
    completedCount(state) {
      return state.todos.filter(t => t.done).length
    }
  },

  actions: {
    load() {
      const data = localStorage.getItem('todos')
      if (data) this.todos = JSON.parse(data)
    },

    save() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    add(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false
      })
      this.save()
    },

    toggle(id) {
      const t = this.todos.find(v => v.id === id)
      if (t) t.done = !t.done
      this.save()
    },

    remove(id) {
      this.todos = this.todos.filter(v => v.id !== id)
      this.save()
    }
  }
})
