let age = 17;
if (age < 18) {
    document.write ('Продажа алкоголя несовершеннолетним запрещена.');
} else {
    document.write ('Чем всё это закончится??');
}

document.write ("<br>");
document.write ('__________________________');

let time = Number(prompt('Сколько сейчас часов на выших часах?'));

if (time < 5 ) {
document.write ("<br>");
document.write ('Почему вы не спите!');
console.log ('Почему вы не спите!');
} else {

if (time <12 ) 
{document.write ("<br>");
document.write ('Доброе утро!');
console.log ('Доброе утро!');
} else {

if (time < 17)  
{document.write ("<br>");
document.write ('Добрый день!');
console.log ('Добрый день!');
} else {

if (time < 20){document.write ("<br>");
document.write ('Доброй ночи!');
console.log ('Доброй ночи!');
} else {
    if (time <= 24) {document.write ("<br>");
    document.write ('Бегом спать!!!>');
    console.log ('Бегом спать!!!');
} } } } }