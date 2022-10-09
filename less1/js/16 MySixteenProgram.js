let age = 17;
if (age < 18) {
    document.write ('Продажа алкоголя несовершеннолетним запрещена.');
} else {
    document.write ('Чем всё это закончится??');
}

document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");

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

if (time <= 20){document.write ("<br>");
document.write ('Доброй ночи!');
console.log ('Доброй ночи!');
} else {
    if (time <= 24) {document.write ("<br>");
    document.write ('Бегом спать!!!>');
    console.log ('Бегом спать!!!');
} } } } }

document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");


let whatToDay = (time < 12 ? "Доброе утро!" : "Привет!");
document.write (whatToDay);

document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");

time <= 12  &&  document.write("Доброе Утро!");
time > 12  &&  document.write("Привет!");

document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");
document.write ('//Пример использования SWITCH');
document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");
document.write ("<br>");
document.write ("<br>");

// let languagePreference = "испанский";
let languagePreference = String(prompt('На каком языке вы говорите ?'));
switch (languagePreference) {
    case "английский":
        document.write ("Hello!");
        break;
    case "испанский":
        document.write ("Hola!");
        break;
    case "немецкий":
        document.write ("Guten Tag!");
        break;
    case "французский":
        document.write ("Bon Jour!");
        break;
    case "русский":
        document.write ("Здрасте нах!");
        break;
    case "японский":
        document.write ("こんにちは!");
        break;
    default: 
        document.write ("Извините я не знаю " + languagePreference + " язык!");
}