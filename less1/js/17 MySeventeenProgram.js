for (let x = 1; x <= 10; x++) {
    document.write (x);
    document.write ("<br>");
}
document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");

let areaCodes = ["770","404","718","202","901","305","312","313","215","803",];
for (y = 0; y < areaCodes.length - 1; y++) {
    document.write ("Другой телефонный код:" + areaCodes[y] + "<br>");
}
document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");

let quessedWord = String(prompt("Какое слово я задумал ?"));
while (quessedWord != "сэндвич") {
    if (quessedWord == "") {break}
    quessedWord = String(prompt ("Нет это не " + quessedWord + " !" + "Попробуйте ще раз!")); }
    alert ("Поздравляю! Это именно то слово!");

document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");

let i = 0;
do {
    i++;
    document.write (i + "_" + "<br>");
} while (i < 10);

for (let  y = 0; y <= 20; y++){
    if (у = 0) {
        continue;}
    if (y%2 != 0) {
    continue;}

    console.log (y + " - четное число!");
}