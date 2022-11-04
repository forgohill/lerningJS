// const link = document.querySelector('.lesson__link');
// const input = document.querySelector('.lesson__input');

// console.log(link.href);
// console.log(input.href);

// console.log(link.value);
// console.log(input.value);

// // получить список доступних свойств
// console.dir(link);


// const lessonText = document.querySelector('.lesson__text');

// // проверяем наличие атрибута
// lessonText.hasAttribute('name');

// // поулчаем значение атрибута
// lessonText.getAttribute('name');

// // устанавливаем значение атрибута
// lessonText.setAttribute('name','value');

// // удаляем атрибут
// lessonText.removeAttribute('name','value');

// lessonText.setAttribute('some-attribute','some-value');

// if(lessonText.hasAttribute('some-attribute')) {
//     console.log('some-attribute - существует!');
// }
// // -----------------------------------------------
// // синхронизация между атрибутами и свойствами
// const input = document.querySelector('.lesson__input');

// input.setAttribute('id','123');
// console.log(input.id);

// input.id = "321";
// console.log(input.getAttribute('id'));

// input.setAttribute('value','Привет!');
// console.log(input.value);

// input.value = "Как дела!"
// console.log(input.getAttribute('value'));

// const lessonTextData = document.querySelector('.lesson__text');

// console.log(lessonTextData.dataset.size);

// // перезаписываем дата атрибут
// lessonTextData.dataset.size = "5810";
// console.log(lessonTextData.dataset.size);

const link = document.querySelector('.lesson__link');
console.log(link.tagName);
link.hidden = true;
console.log(link.hidden);
