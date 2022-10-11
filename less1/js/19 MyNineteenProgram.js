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
function calcSumm2(numOne2, numTwo2) {
    let result = 1;
        // умножается result на numOne2 numTwo2 раз в цикле
        for (let i = 0; i < numTwo2; i++){
        result *= numOne2;
    }
    return result;
}
console.log (calcSumm2(2,3));
