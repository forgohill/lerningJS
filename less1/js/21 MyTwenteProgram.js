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