/*
// перенос элементов

// получаем объект
// const lessonBlock = document.querySelector('.lesson');
// получаем объект
const title = document.querySelector('h3');
// переносим title в конец блока lessonBlock
// lessonBlock.append(title);


// клонирование объектов
// .cloneNode()

// получаем объект
const textElement = document.querySelector('.lesson__text');

// клонирование без дочерних элементов
const cloneTextElement = textElement.cloneNode();

// глубокое клонирование вместе с содержимым
const clone2TextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);
lessonBlock.append(clone2TextElement);

const listElement = document.querySelector('.lesson__list');
listElement.remove();
*/

// УПРАВЛЕНИЕ CSS ИЗ JS


// // получаем объект
const element = document.querySelector ('.lesson__item-list_red');

// // получаем Имена Класса
// const elementClassName = element.className;
// console.log(elementClassName);

// // Перезаписываем имя класса
// element.className = "red";

// // добавить класс
// element.classList.add('active');
// // удалить класс
// element.classList.remove('active');
// // добавить класс если его нет, а если есть удалить
// element.classList.toggle('active');
// // проверка наличия класса - возвращается true\false
// element.classList.contains('active');
// // console.log(element.classList.contains('active'));

// if (element.classList.contains('active')) {
//     console.log('у element есть класс activ');

// };

// for (const className of element.classList) {
//     console.log(className);
// }

element.style.color = "red";

element.style.marginBottom = "30px";

element.style.zIndex = "10";

console.log(element.style.marginBottom);
