import TodoList from "./TodoList.js";
import TodoListForm from "./TodoListForm.js";
import TodoListItem from "./TodoListItem.js";
import Api from './Api.js';

const initialItems = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  // 'Сделать фронт для своего проекта',
  // 'Погулять с собакой',
  // 'Разобраться в замыканиях',
  // 'Решить затачу на Codewars',
];

const container = document.querySelector('#app');
const createTodoListForm = (...args) => {
  return new TodoListForm(...args);
}
const createTodoListItem = (...args) => {
  return new TodoListItem(...args);
}

// const todoList = new TodoList(initialItems, container, createTodoListForm, createTodoListItem);
// todoList.render(); // —> инициализация списка задач


const api = new Api({
  url: 'https://api.todo-list.ru/tasks/',
  headers: {
    'content-type': 'application/json',
    // Authorization: '9f8a312759fb',
  }
})

const tasks = api.getAllTasks();

tasks.then((data) => {
  const todoList = new TodoList(
    data.map((item) => {
      return { name: item.name, id: item._id };
    }),
    container,
    createTodoListForm,
    createTodoListItem,
    api);
  todoList.render(); // —> инициализация списка задач
})
  .catch((err) => {
    alert(err);
  });