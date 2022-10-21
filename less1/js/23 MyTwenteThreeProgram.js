// пример того как если бы
// гитара была объектом
let guitar = {
    bodyColor: "black",
    scratchPlateColor: "white",
    numberOfStrings: 6,
    brand: "Yamaha",
    bodyType: "Solid",
    strum: function () {            },
    tune: function () {            },
}
console.log(guitar);
console.log("->-----------------1-");

// коструктор Object()
let person = new Object();
person.feet = 2;
person.name = "Sandy";
person.hair = 'black';
console.log(person);
console.log("->-----------------2-");

// создание нового свойста
// для объекта точечной нотацией
let firstObject = {};
firstObject.x = 10;
firstObject.y = "Marllboro";
let fullObject = firstObject.x + firstObject.y;
document.write (firstObject.x + "<br>")
document.write (fullObject)
console.log(firstObject.x);
console.log("->-----------------3-");

// создание нового свойста
// для объекта скобочной нотацией
let personObject = {};
personObject["firstName"] = "Iggy";
let personProperty = "secondName";
personObject[personProperty] = "Luisa"

console.log(personObject);
console.log("->-----------------4-");
