class TodoListForm {
    static _template = document.querySelector('#todolist-form').content;

    constructor(container, createTodoListItem) {
        this._container = container;
        this._createTodoListItem = createTodoListItem;
    }

    render() {
        this._view = TodoListForm._template.cloneNode(true).children[0];

        this._view.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const input = this._view.querySelector('input');

            this._createTodoListItem(input.value);

            input.value = '';
        })

        this._container.append(this._view);
    }
}

export default TodoListForm;