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

const elem5 = document.querySelector('.lesson__item-sub-list');
console.log(elem5);
const parentList = elem5.closest('.lesson__list');
console.log(parentList);