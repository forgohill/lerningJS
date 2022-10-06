let message1 = "Привет фрилансер!";
let message2 = "Привет фрилансер! - Пора тусить!";

if (2 > 1) {
    //Код выполняется только если 
    //выражение в скобках вренет true
    console.log (message1);
}

let first = 10;
let second = 10;

if (first === second) {
    //Код выполняется только если 
    //выражение в скобках вренет true
    console.log (message2);
}
let message3 = "это видно если if - true";
if (" ")
{
    console.log (message3);
}
//Эта запись говорит о то что  пробел даёт true, отсутствие пробела дает false.

let message4 = "Эту надпись видно если treu упрощённая запись!";
if ( 2 > 1 ) console.log(message4);
// Это упрощенный код

let message5 = "Это возвращенно если сообщение 5 true";
let number1 = 1;
if (number1 > 1) {
    console.log (message5);
} else {
    console.log ('Ты пидр!');
}
// Эта запись показывает что есть опреатр else - который выполняется если if - false
let number2 = 30;
if (number2 > 50)  {
    console.log ((number2), ' больше 50');
} else if (number2 > 30 ) {
    console.log ((number2), ' больше 30');
} else if (number2 > 10 ) {
console.log ((number2), ' больше 10');
} else if (number2 > 1 ) {
console.log ((number2), ' больше 1');
} else {
    console.log('Ты снова пидр!');
}
