// Возврат результата
function calcSumm1(numOne1, numTwo1) {
    let numSumm1 = numOne1 + numTwo1;
    
    //возврат
    return numSumm1;

    // дальше код не выполняется
}

let funcRezult1 = calcSumm1 (7,2);
console.log (`Сумма: ${funcRezult1}`);


// Рукурсия
/*
function calcSumm2(numOne2, numTwo2) {
    let result = 1;
        // умножается result на numOne2 numTwo2 раз в цикле
        for (let i = 0; i < numTwo2; i++){
        result *= numOne2;
    }
    return result;
}
console.log (calcSumm2(2,3));
*/
function calcSumm2(numOne2,numTwo2) {
    if(numTwo2 === 1) {
        return numOne2;
    } else {
        return numOne2 * calcSumm2 ( numOne2, numTwo2 - 1 );
    }
}
console.log (calcSumm2(2,2));

// Функциональное выражение ( Function Expression)
let showMessage = function () {
    console.log ('привет!!!');
};
showMessage();

function getSumm() {
    let summ = 1 + 2;
    console.log (summ);
};
let someVar = getSumm;

someVar();
getSumm();

// Вытаскиеваем функцию за выражение при помощи Function Expression
let getSumm2;
if (2 > 1) {
    getSumm2 = function () {
        let summ2 = 1+2;
        console.log (summ2);
    };
}
getSumm2();

// Однострочная стрелочная функция
let getMessage = (text, name1) => text + ', ' + name1 + '!';
console.log (getMessage('привет', 'Вася!!'));
// Многострочная стрелочная функция
let getMessage1 = (text, name2) => {
    let message = text +', '+ name2 + '!';
    return message;
};
console.log (getMessage1('Привет', 'Витёк'));

function showMessage3 (text2, name2) {
    console.log (`${text2}, ${name2}!!!`);
}
// setTimeout(showMessage3, 3000, 'Привет', 'Вася');
// setInterval(showMessage3, 500, 'Привет', 'Вася!!!!');

// Рекурсивный интервал
function showMessage4 (text4, name4) {
    console.log (`${text4}, ${name4}!!!`);
    setTimeout(showMessage4, 500, 'Привет', '!!!');
}
// setTimeout(showMessage4, 500, 'Привет', '!!!');

// Планирование setTimeout и setInterval

function showNumber(num) {
    console.log (num);
    if (num < 5) {
        setTimeout (showNumber, 15, ++num)
    }
}
setTimeout (showNumber, 15, 1);

// clearTimeout - останавливает действия планировщика

function showNumber2(num2) {
    console.log (num2)
    let timeID = setTimeout (showNumber2, 1000, ++num2);
    if (num2 === 6) {
        clearTimeout (timeID);
    }
}
setTimeout (showNumber2, 1000, 1);

// clearTimeout - останавливает действия планировщика
// пример для setInterval
let result = 0;
function showNumber3 (num3) {
    result += num3;
    console.log (result);
    if (result === 5) {
        clearInterval (timeID3);
    }
}
let timeID3 = setInterval (showNumber3, 1000, 1);

// функция соединения строк
function createMessage(text5, name5) {
    return `${text5}, ${name5}!`;
}

// функция вывода в консоль
function showMessage5(message) {
    console.log (message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text5, name5) {
    showMessage5(createMessage(text5, name5));
}

initMessage('Привет','фрилансер');