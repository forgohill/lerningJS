import TodoList from "./TodoList.js";
import TodoListForm from "./TodoListForm.js";
import TodoListItem from "./TodoListItem.js";

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

const todoList = new TodoList(initialItems, container, createTodoListForm, createTodoListItem);
todoList.render(); // —> инициализация списка задач
