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