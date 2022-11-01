
const elems = document.querySelectorAll('li');

// получение конкретного элемента коллекции
console.log(elems[2]);

// получение всех едементов коллекции
// при помощи for...of
for (const item of elems) {
    console.log(item);
}
console.log("_______________________1_");
// получение всех едементов коллекции
// при помощи forEach

elems.forEach(item => {
    console.log(item);
});

console.log("_______________________2_");

// можно искать внутри объекта
const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
console.log("_______________________3_");

// поиск с помощью querySelector(css)
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);
console.log("_______________________4_");

//метод getElementById()
const elem1 = document.getElementById('listItem');
console.log(elem1);
console.log("_______________________5_");

//метод getElementsByTagName
const elem2 = document.getElementsByTagName('li');
console.log(elem2);
console.log("_______________________6_");

//метод getElementsByClassName
const elem3 = document.getElementsByClassName('lesson__item-list');
console.log(elem3);
console.log("_______________________7_");

//метод getElementsByName
const elem4 = document.getElementsByName('list');
console.log(elem4);
console.log("_______________________8_");