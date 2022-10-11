// запуск функции

// функция вывода сообщения

function showMessage () {
    console.log('Сообщение');
}
showMessage();

// Вложенность и видимость функций
let globalVar = "Я глобальная переменная"

function getSumm () {
    let numOne, numTwo;
    function getNumOne() {
        numOne =1;
        console.log (globalVar);
    }
    function getNumTwo() {
        numTwo = 2;
        console.log (globalVar);
    }
    getNumOne ();
    getNumTwo();
    let numSumm = numOne + numTwo;
    console.log(numSumm);
    console.log (globalVar);
}
console.log (globalVar);
getSumm();

// Внешняя переменная
let message1;
function showMessage1() {
    // Используется внешняя переменная
    message1 = "сообщение1";
}
showMessage1();
console.log(message1);


// Создание переменной с одинаковым
// именем внутри функции и снаружи
let message2 = "сообщение пременной снауржи функции";;
function showMessage2() {
    let message2 = "сообщение пременной внутри функции";
    console.log (message2);
}
showMessage2();
console.log (message2);
console.log("___________________________________");

function calcSumm2(num1One = 1, num1Two = 2) {
    console.log (`Переменная num1One:_${num1One}`)
    console.log (`Переменная num1One:_${num1Two}`)

    let num1Summ = num1One + num1Two;
    console.log (`Сумма:_${num1Summ}`)
}
calcSumm2(5,5);

// функции колбэки
function calc2Summ (num2One,num2Two,more,less) {
    let num2Summ = num2One + num2Two;

    if (num2Summ > 3) {
        more();
    } else {
        less();
    }
}

    function showMoreMessage() {
        console.log ('Больше чем 3');
    }
    function showLessMessage() {
        console.log ('Меньше чем 3')
    }

calc2Summ (1,5,showMoreMessage,showLessMessage);