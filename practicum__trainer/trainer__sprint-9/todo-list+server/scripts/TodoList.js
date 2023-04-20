// import { createTodoListForm } from "./index.js";

class TodoList {
  static _template = document.querySelector('#todolist').content;

  constructor(items, container, createTodoListForm, createTodoListItem, api) {

    this._items = items;
    this._container = container;
    this._createTodoListForm = createTodoListForm;
    this._createTodoListItem = createTodoListItem;
    this._api = api;
  }

  _saveItem = (item) => {
    this._api
      .addTask({ name: item })
      .then((data) => {
        this._addNewItem(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _addNewItem = (item) => {
    this._createTodoListItem(item, this._view.querySelector('.items'), this._addNewItem, this._api).render();
  }

  render() {
    this._view = TodoList._template.cloneNode(true).children[0];

    // отрисовываем форму
    this._createTodoListForm(this._view.querySelector('.todolist-form'), this._saveItem).render();

    this._items.forEach(item => { this._addNewItem({ name: item.name, id: item.id }) });

    this._container.append(this._view);
  }
}

export default TodoList;