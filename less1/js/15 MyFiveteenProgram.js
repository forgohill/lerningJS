let underscore = "__________________________";

//задача 1
let num0;
num0 = 1;
while (num0<6){
    console.log (num0);
    num0++;
}
console.log (underscore);


//задача 2
let num1=8;
while (num1) {
    console.log (num1);
    num1--;
}
console.log (underscore);

//задача 3
for (let num3 = 0; num3 < 3; num3++) {
    console.log (`Число ${num3}`);
}
console.log (underscore);

let num4 = 0;
while (num4 < 3) {
    console.log (`Число ${num4}`);
    num4++
}
console.log (underscore);

//задача 4
firstFor : for (let num5 = 0; num5 <2 ; num5++) {
    for (let size1=0; size1 <3; size1++){
        console.log (size1);
        if (size1==1) {
            break firstFor;
        }
    }
}