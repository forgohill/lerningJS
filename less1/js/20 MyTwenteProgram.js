'use strict'
// задача1
// что первое вернется в консоль?
function showName () {
    console.log ('Вася!');
}
setTimeout (showName, 0);
console.log ('Коля!');

// задача2
// ReferenceError: consol is not defined
/*

showMessage1 ();

function showMessage1() {
    consol.log ('Сообщение 1');
}

*/
//задание 3
// ReferenceError: Cannot access 'showMessage2' before initialization
/*
showMessage2 ();
let showMessage2 = function () {
    console.log ('Сообщение 2');
}
*/
let showMessage3;
if (2 > 1) {
    showMessage3 = function () {
        console.log ('сообщение 3');
    }
}
showMessage3();