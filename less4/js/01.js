// // DOM навигация по документу

// // самые верхние доступны
// // как свойства можно вывести через консоль

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

// console.log("_______________________1_");

// // firstChildNode и lastChilDNode
// // доступ к первому и элементу (дочернему)
// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;
// console.log(firstChildNode);
// console.log(lastChildNode);

// console.log("_______________________2_");

// // колекция childNodes
// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// // существует так же фунцкция
// // hasChildNodes ()
// // она сообщит существуют ли дочерные элементы
// // если да - true иначе false

// console.log(bodyElement.hasChildNodes());
// console.log("_______________________3_");

// // пример перебора колекции
// for (const node of childNodes) {
//     console.log(node); // покажет все узлы колекции
// };
// console.log("_______________________4_");
// // обращаемся к предидущему
// // к следующеиму
// // и непосредственно к родителю

// const previosSiblingNode = bodyElement.previousSibling;
// const nextSiblingNode = bodyElement.nextSibling;
// const parentNode = bodyElement.parentNode;

// console.log(previosSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);
// console.log("_______________________5_");


// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);
// console.log("_______________________6_");

// const firstChild = bodyElement.firstElementChild;
// const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);
// console.log("_______________________7_");

// const previosSibling = bodyElement.previousElementSibling;
// const nextSibling = bodyElement.nextElementSibling;
// const parent = bodyElement.parentElement;

// console.log(previosSibling);
// console.log(nextSibling);
// console.log(parent);
// console.log("_______________________8_");

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}