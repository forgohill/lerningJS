// создание элемента innerHTML

// получаем объект
const textElement = document.querySelector('.lesson__text');

// получаем значение объекта как есть вместе HTML
/* 
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

textElement.innerHTML = `Живи, в другом месте а работай везде!`;
console.log(textElementContent);


textElement.innerHTML = `<p>${textElementContent}</p> <p>Живи! а работай в <span class="yellow">свободное</span> время!</p>`;

console.log(textElement.innerHTML);
*/
console.log("_______________________1_");


// создание элемента .outerHTML

// получаем объект
const textElementOuter = document.querySelector('.lesson__text');

// получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
/*
const textElementContentOuter = textElementOuter.outerHTML;
console.log(textElementContentOuter);

textElementOuter.outerHTML = `<p>Живи! а работай в <span class="yellow">свободное</span> время!</p>`;
console.log(textElementOuter.outerHTML);
*/
console.log("_______________________2_");

// просто текст элемента textContent
/*
// получаем объект
const textElementText = document.querySelector('.lesson__text');
const textElementContentText = textElementText.textContent;
console.log(textElementContentText);



// полезная особеность записываем текст textContent
// «безопасным способом»

textElementText.textContent = `<p>Живи! а работай в <span class="yellow">свободное</span> время!</p>`
console.log(textElementText.textContent);
textElementText.textContent = `Так давай вперед!!!`
console.log(textElementText.textContent);*/
console.log("_______________________3_");

// data.
// содержимое текстового узла/комментария
/*


const textElementData = document.querySelector('.lesson__text');
const getCommentData = textElementData.nextSibling;

console.log(getCommentData);
console.log(getCommentData.data);

console.log("_______________________4_");

getCommentData.data = 'Привет!'
console.log(getCommentData.data);
*/
console.log("_______________________5_");
// создание элементов и узлов 
// createElement

const newElement = document.createElement('div');
console.log(newElement);

newElement.innerHTML = `Живи! а работай в <span class="yellow">свободное</span> время!`;
console.log(newElement);
console.log("_______________________6_");

//createTextNode
const newText = document.createTextNode('Привет!');
console.log(newText);
console.log("_______________________7_");

// методы вставки объектов в тело документа
// const textElementInsert = document.querySelector ('.lesson__text')

// ..перед объектом
// textElementInsert.before(newElement);
// ..после оъекта
// textElementInsert.after(newElement);
// ..внутрь и вначало объекта
// textElementInsert.prepend(newElement);
// ..внутрь и в конец объекта
// textElementInsert.append(newElement);
// textElementInsert.append(newElement,'Привет');
// textElementInsert.append(`Живи! а работай в <span class="yellow">свободное</span> время!`);


console.log("_______________________8_");


/*
// insertAdjacentHTML()
const textElementAdjacent = document.querySelector('.lesson__text')

// вставляем текст HTML, элемент
textElementAdjacent.insertAdjacentHTML (
    'afterend',
    `<p>Живи! а работай в <span class="yellow">свободное</span> время!</p>`
);
*/
console.log("_______________________9_");
// insertAdjacentText
const textElementAdjacent = document.querySelector('.lesson__text')
//  вставляем текст - теги вставляются как текст
// textElementAdjacent.insertAdjacentText (
//     'afterend',
//     `Живи! а работай в <span class="yellow">свободное</span> время!`
// );


// insertAdjacentElement


//  вставляем текст - теги вставляются как текст
textElementAdjacent.insertAdjacentElement (
    'afterend',
    newElement
);