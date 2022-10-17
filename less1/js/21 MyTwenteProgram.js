function addT(aString) {
    aString += "t";
    console.log (aString);
}
addT('Я программирую на Java Scrip');

// получение суммы чисел из массива

let myNumber = [2,4,2,7];
let total = 0;
for (oneNumber in myNumber) {
    total = total + myNumber[oneNumber];
}
document.write(total);

document.write('<br>');
document.write('------------------');
document.write('<br>');
// создание функции для сложения чисел образующих массив

/*
*сложение элементов массива
*@param {Array.<number>} numbersToAdd
*@return {Numbers} sum
*/

function addNumbers(numbersToAdd) {
    let sum = 0;
    for (oneNumber in numbersToAdd) {
        sum = sum + numbersToAdd[oneNumber];
    }
    return sum;
}

let myNumbers = [2,4,2,7,];
let myNumbers2 = [3333,222,111,];
let myNumbers3 = [777,555,777,555,];

let sum1 = addNumbers(myNumbers);
let sum2 = addNumbers(myNumbers2);
let sum3 = addNumbers(myNumbers3);

document.write(sum1 + '<br>');
document.write(sum2 + '<br>');
document.write(sum3 + '<br>');

document.write('<br>');
document.write('------------------');
document.write('<br>');

/*
*выводит текущю дату в окно браузера
*/
function getTheDate() {
    let rightNow = new Date();
    document.write(rightNow.toDateString());
}
getTheDate();

document.write('<br>');
document.write('------------------');
document.write('<br>');

// пример: возврат значиения функции
function getHello() {
    return "Привет!";
}
let helloText = getHello();
console.log (helloText);

// пример: возврат результата вычисления выражения
function getCircumference() {
    let radius = 12;
    return 2 * Math.PI * radius;
}
console.log (getCircumference());

/*
*пример создания функции с парметрами и
*задача такой функции аргументов с последующим
*возвращением этих аргументов в консоль
*/
function myTacos(meat,produce) {
    console.log(meat); // выведет "beef"
    console.log(produce); // выведет "onions"
}
myTacos ("beef","onions")

// передача аргументов по значению

/**
 * Инкрементирование двух значений
 * @param {number} number1
 * @param {number} number2
 */

function addToMyNumbers (number1,number2) {
    number1++;
    number2++;
    console.log ("Значение number 1 в функции : " + number1);
    console.log ("Значение number 2 в функции : " + number2);
}

let number1 = 3;
let number2 = 12;

addToMyNumbers(number1,number2);

console.log ("Исходное number 1 в функции : " + number1);
console.log ("Исходное number 2 в функции : " + number2);

// проверка на undefined в заголовке функции
function welcome (yourName = "друг") {
    document.write ("Привет, " + yourName + "<br>");
}
welcome("Пидарас");
welcome("Чёрт");
welcome();

document.write('<br>');
document.write('------------------');
document.write('<br>');

/**
 * Гибкое приветвенное сообщение
 */

function flexibleWelcome() {
    let welcome = "Добро пожаловать, ";
    for (i = 0; i < arguments.length; i++) {
        welcome = welcome + arguments[i] + "";
    }
    return welcome;
}
document.write (flexibleWelcome("Кристофер ","Джеймс ","Феникс ","Минник ","<br>"));
document.write (flexibleWelcome("Ева ","Аня ","Холанд ","<br>"));

// выводит в окно браузера :
// Добро пожаловать, Кристофер Джеймс Феникс Минник
// Добро пожаловать, Ева Аня Холанд

document.write('<br>');
document.write('------------------');
document.write('<br>');

// Анонимные функции
let doTheThing = function (thingToDo) {
    document.write("сделать следующее: "+ thingToDo);
}
doTheThing(("анжумания, приседания 10 разов"));

document.write('<br>');
document.write('------------------');
document.write('<br>');

// Самовыполняющиеся анонимные функции
let myVariable = "Я нахожусь вне функции. <br>";
(function () {
    let myVariable = "Я нахожусь внутри этой анонимной функции. <br>";
    document.write (myVariable);
})();
document.write (myVariable);

document.write('<br>');
document.write('------------------');
document.write('<br>');

// РЕКУРСИЯ

// Бескончная рекурсия
function squareItUp(startingNumber) {
    let square = startingNumber * startingNumber;
    console.log (square);
    squareItUp(square);
}
// При запуске функции - она начент вызывать
// сама себя бесконечное количество раз
// масимум стеков 10242

// отключение рекурсии при выполнении
// базового случая
function squareItUp2(startingNumber) {
    // условие прекращения выполнения, неверный ввод
    if ((typeof startingNumber != 'number') ||
        (startingNumber <= 1)) {
            return - 1;
        }
        
    square = startingNumber * startingNumber;
    if (square > 1000000) {
        console.log (square);
    } else {
        squareItUp2 (square);
    }
}

// Функции созданые внутри других функций
function turnIntoAMartian(myName) {
    
    function recallName(myName) {
        let martinName = myName + "Марсианин";
    }
    recallName(myName);
    console.log(martianName); // вернет undefined
}
/**
 * Если запустить turnIntoAMartian("string")
 * то выскочит ошибка
 * Uncaught ReferenceError: martianName is not defined
 * непойманная ссылка
 * recallName("string"), тоже самое
 */
