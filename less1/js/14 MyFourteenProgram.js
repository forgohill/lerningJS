// цикл while
// пример

let num = 0;
while (num < 5) {
    console.log (num);
    num++;
}

let underscore = "_________________";
console.log (underscore);

let num1 = 5;
while (num1) {
    console.log (num1);
    num1--;
    //Этот цикл при нуле выдает false и не выполняется
}
console.log (underscore);

//облегченная запись:
let num3 = 5;
while (num3) console.log (num3--);
console.log (underscore);

let num4 = 0; // говорим что переменная num4 = 0
do {
    console.log (num4); // возвращаем num4
    num4++; //увеличиваем num4 на 1
} while (num4 < 5); // повторяем цикл до тех пор пока num4 < 5
console.log (underscore);

