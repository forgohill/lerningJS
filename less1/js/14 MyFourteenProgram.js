// цикл while
// пример

let num = 0;
while (num < 5) {
    console.log (num);
    num++;
}

let underscore = "_^_^_^_^_^_^_^_^_^_^_^_^_^_^_^_";
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

for (let num5 = 0; num5 < 5; num5++ ){
    console.log (num5);
}
console.log (underscore);

//создание переменной снаружи цикла , а присвоение значения уже внутри цикла 
// Это позволит работать с переменной не только внури цикла
let num6;
for (num6 = 0; num6 < 6; num6++){
    console.log (num6)
}
console.log ('Вывод переменной вне цикла: ' + num6);
console.log (underscore);

// деректива break
let num7 = 0;
for ( ; num7 < 5; num7++) {
    console.log (num7);
    if (num7 == 2) break;
}
console.log ('Работа окончена num7 = ' + num7);
console.log (underscore);

// деректива coninue
let num8 = 0;
for (;num8 < 5;num8++) {
    if (num8 == 2) continue;
    console.log (num8)
}
console.log (underscore);

//Метки
first1For: for (let num9 = 0; num9 < 2; num9++) {
    for (let size1 = 0; size1 < 3; size1++) {
        if (size1 == 2) {
            break first1For;
        }
        console.log (size1);
    }
}
console.log (underscore);