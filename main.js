const { createApp } = Vue

createApp({
    data() {
        return {
            todos: [],
            input: {
                title: '',
                description: '',
                status: 'to-do',
                selectedCardId: null
            }
        };
    },
    mounted() {
        $(this.$refs.vuemodal).on("hidden.bs.modal", () => { this.resetForm() }) //  Listens for modal close
        if (localStorage.getItem("tasks"))
            this.todos = JSON.parse(localStorage.getItem("tasks"));
    },
    methods: {
        createOrUpdateTodo() {
            const titleRegex = /^[A-Za-z]+$/;
            if (this.input.title && this.input.title.match(titleRegex) && this.input.description && this.input.description.length > 25 && this.input.status) {
                const obj = {
                    'id': this.input.selectedCardId ?? Date.now(),
                    'title': this.input.title,
                    'description': this.input.description,
                    'status': this.input.status
                }
                if (this.input.selectedCardId)
                    this.todos[this.todos.findIndex((card) => card.id == this.input.selectedCardId)] = obj;
                else
                    this.todos.push(obj);
                localStorage.setItem('tasks', JSON.stringify(this.todos))
                this.resetForm();
                $('#exampleModal').modal('hide');
            }
        },
        onCardClk(todo) {
            this.input = Object.create(todo, {});
            this.input.selectedCardId = todo.id;
            $('#exampleModal').modal('show');
        },
        resetForm() {
            this.input = {}; //Makes form empty
            this.input.status = "to-do";
        },
        deleteTodo(id) {
            this.close();
            this.todos.splice(this.todos.findIndex((card) => card.id == id), 1);
            localStorage.setItem('tasks', JSON.stringify(this.todos))
        },
        deleteAll() {
            this.todos = [];
            localStorage.clear();
        },
        close() {
            $('#exampleModal').modal('hide');
        }
    },
}).mount('#app')