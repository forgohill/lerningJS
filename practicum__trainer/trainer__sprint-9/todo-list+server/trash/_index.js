import TodoList from './TodoList.js';
import TodoListForm from './TodoListForm.js';
import TodoListItem from './TodoListItem.js';

const initialItems = [
    'Сделать проектную работу',
    'Полить цветы',
    'Пройти туториал по Реакту'
];

const container = document.querySelector('#app');

const createTodoListForm = (...args) => {
    return new TodoListForm(...args);
}

const createTodoListItem = (...args) => {
    return new TodoListItem(...args);
}

const todoList = new TodoList(initialItems, container, createTodoListForm, createTodoListItem);
todoList.render();