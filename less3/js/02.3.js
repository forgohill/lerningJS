`use strict`

// получаем статитческую колекцию
const listStatic = document.querySelectorAll('.lesson__item-list');

// получаем "живую" коллекцию
const listLive = document.getElementsByClassName('lesson__item-list');

console.log(listStatic);
console.log(listLive);

// создаем новый HTML объект

const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
    "beforeend",
    '<li class="lesson__item-list">Новый пункт</li>'
);
console.log("_______________________1_");

// метод closest ()
const elem5 = document.querySelector('.lesson__item-sub-list');
console.log(elem5);
const parentList = elem5.closest('.lesson__list');
console.log(parentList);
console.log("_______________________2_");

// проверка matches
const elementY = document.querySelectorAll('.lesson__item-list');

    for (let elementX of elementY) {
        if (elementX.matches('[class$="lesson__item-list_red"]')) {
            console.log('Крассный');
        } else if (elementX.matches('[class$="lesson__item-list_blue"]')) {
            console.log('Синий');
        }
    };
console.log("_______________________3_");

// нахождение следующего елемента за выбранным
const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);
console.log("_______________________4_");

