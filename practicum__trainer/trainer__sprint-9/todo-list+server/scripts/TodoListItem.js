class TodoListItem {
  static _template = document.querySelector('#item').content;

  constructor(data, container, createTodoListItem, api) {
    this._text = data.name;
    this._id = data.id;
    this._container = container;
    this._createTodoListItem = createTodoListItem;
    this._api = api;
  }

  _deleteHandler = () => {
    this._api
      .deleteTask(this._id)
      .then(() => {
        this._view.remove();
      })
      .catch((err) => {
        console.log(err);
      });
    this._view.remove();
  }

  _copyHandler = () => {
    this._createTodoListItem(this._text); //.render()
    // this._view.remove();
  }

  _editHandler = () => {
    const title = this._view.querySelector('.todo_item__header');
    const titleText = title.textContent;

    title.remove();

    const titleInput = document.createElement('input');
    titleInput.value = titleText;
    titleInput.classList.add('todo_item__header-editing');

    titleInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        title.textContent = titleInput.value;
        titleInput.remove();

        this._view.prepend(title);
      }
    })
    this._view.prepend(titleInput);
  }


  render() {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    // console.log(this._view);

    // тут надо анполнить данными
    // наполнить обработчиками событий
    this._view.querySelector('.todo_item__header').textContent = this._text;
    this._view.querySelector('.button__delete').addEventListener('click', this._deleteHandler)
    this._view.querySelector('.button__duplicate').addEventListener('click', this._copyHandler)
    this._view.querySelector('.button__edit').addEventListener('click', this._editHandler)

    this._container.append(this._view);
  }
}

export default TodoListItem;