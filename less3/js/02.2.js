
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