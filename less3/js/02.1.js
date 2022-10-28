// поиск селектору класса

const elemsOne = document.querySelectorAll('.lesson__list')
console.log(elemsOne);
console.log("_______________________1_");

// поиск по селектору тега

const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);
console.log("_______________________2_");

// поиск по смешанному селектору тега и класса

const elemsThree = document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);
console.log("_______________________3_");

// поиск по тегу первого уровня вложенности

const elemsFour = document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);
console.log("_______________________4_");

// поиск по нескольким классам

const elemsFive = document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);
console.log("_______________________5_");

// поиск по вложенным классам

const elemsSix = document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);
console.log("_______________________6_");

// поиск по ID

const elemsSeven = document.querySelectorAll('#listItem');
console.log(elemsSeven);
console.log("_______________________7_");

// поиск по атрибуту

const elemsEight = document.querySelectorAll('[data-item]');
console.log(elemsEight);
console.log("_______________________8_");

// поиск по конкретному атрибуту

const elemsNine = document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);
console.log("_______________________8_");