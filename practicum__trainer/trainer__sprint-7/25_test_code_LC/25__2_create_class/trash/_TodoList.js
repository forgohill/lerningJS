
class TodoList {
    static _template = document.querySelector('#todolist').content;

    constructor(items, container, createTodoListForm, createTodoListItem) {
        this._items = items;
        this._container = container;
        this._createTodoListForm = createTodoListForm;
        this._createTodoListItem = createTodoListItem;
    }

    _addNewItem = (item) => {
        this._createTodoListItem(item, this._view.querySelector('.items'), this._addNewItem).render();
    }

    render() {
        this._view = TodoList._template.cloneNode(true).children[0];

        this._createTodoListForm(this._view.querySelector('.todolist-form'), this._addNewItem).render();

        this._items.forEach(item => this._addNewItem(item));

        this._container.append(this._view);
    }
}

export default TodoList;