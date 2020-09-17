Vue.component('todo-item', {
    template: '#todo-item-template',
    data() {
        return {
            completed: false
        }
    },
    methods: {
        toggle() {
            this.completed = !this.completed
        }
    }
})

new Vue({
    el: '#app'
})