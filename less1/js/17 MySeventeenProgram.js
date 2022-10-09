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





document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");

for (let prop in document) {
    document.write (prop +"<br>");
}

document.write ("<br>");
document.write ('__________________________');
document.write ("<br>");

for (let prop in document) {
    document.write (prop + ": " + document[prop] + "<br>")
}