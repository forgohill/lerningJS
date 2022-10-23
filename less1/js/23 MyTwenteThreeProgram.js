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

// программа которая выводит
// значения свойств веведенных пользователем
let myChair = {
    "cushionMaterial": "",
    "numberOfLegs": "",
    "legHeight": "",
};
function configureChair() {
    let userValue;
    for(let property in myChair){
        if (myChair.hasOwnProperty(property)) {
            userValue = prompt("Введите значение свойства : " + property);
            myChair[property] = userValue;
        }
    }
};
function writeChairReceipt() {
    document.write("<br><h2>Объект chair будет иметь следующую конфигурацию:</h2>");
    for (let property in myChair) {
        if (myChair.hasOwnProperty(property)) {
            document.write(property + ": " + myChair[property] + "<br>");
        }
    }
};
configureChair();
writeChairReceipt();

console.log("->-----------------5-");

// как удалять свойства из объекта
let  myObjectDelete = {
    var1: "the value",
    var2: "another value",
    var3: "yet another"
};
// удалить var2 из объекта myObjectDelete
delete myObjectDelete.var2;
// выводим в консоль myObjectDelete.var2
// выводит undefined
console.log(myObjectDelete.var2);
console.log("->-----------------6-");

// методы это занчения
// свойств объектов 
// которые являются функциями
let sandwich ={
    meat: "",
    chees: "",
    bread: "",
    condiment: "",
    makeSandwich: function (meat,cheese,bread,condiment) {
        sandwich.meat = meat;
        sandwich.chees = cheese;
        sandwich.bread = bread;
        sandwich.condiment = condiment;
        let mySandwich = sandwich.bread + ", " + sandwich.meat + ", " + sandwich.chees + ", " + sandwich.condiment;
        return mySandwich;
    }
};
let sandwichOrder = sandwich.makeSandwich ("ham","cheaddar", "wheat","spicy mustard");
document.write (sandwichOrder);
console.log("->-----------------7-");


// используем this
// вместо конкретного объекта

let sandwich1 ={
    meat: "",
    chees: "",
    bread: "",
    condiment: "",
    makeSandwich: function (meat,cheese,bread,condiment) {
        this.meat = meat;
        this.chees = cheese;
        this.bread = bread;
        this.condiment = condiment;
        let mySandwich = this.bread + ", " + this.meat + ", " + this.chees + ", " + this.condiment;
        return mySandwich;
    }
};
let sandwichOrder1 = sandwich1.makeSandwich ("ham1","cheaddar1", "wheat1","spicy mustard1");
document.write (sandwichOrder1);
console.log("->-----------------8-");

// объектно-оринетрованный способ
// наследование
/*
let pers = new Object();
pers.eyes =2;
pers.ears =2;
pers.arms =2;
pers.hands =2;
pers.feet =2;
pers.legs =2;
pers.species ="Homo Sapiens";

let willieNelson = new Object();
willieNelson.eyes =2;
willieNelson.ears =2;
willieNelson.arms =2;
willieNelson.hands =2;
willieNelson.feet =2;
willieNelson.legs =2;
willieNelson.species ="Homo Sapiens";
willieNelson.occupation ="musician";
willieNelson.hometown ="Austin";
willieNelson.hair ="Long";
willieNelson.genre ="country";
console.log(pers);
console.log(willieNelson);

* ниже будет приведет способ 
* населодования для таких обектов
* где тип объекта схож
*/

function Person1() {
    this.eyes =2;
    this.ears =2;
    this.arms =2;
    this.hands =2;
    this.feet =2;
    this.legs =2;
    this.species ="Homo Sapiens";
};
let willieNelson = new Person1();
console.log(willieNelson.feet);
alert("Willie Nelson has " + willieNelson.feet + " feet!");
console.log("->-----------------9-");

function PersonName() {
    this.eyes =3;
    this.ears =3;
    this.arms =3;
    this.hands =3;
    this.feet =3;
    this.legs =3;
    this.species ="Homo Erectus";
    
};

let emmiStone = new PersonName();
let johnyCash = new PersonName();
let  petsyCline = new PersonName();

// объект PersonName нуждается в дополнительных
// своствах!!!
PersonName.prototype.knees =2;
PersonName.prototype.toes =10;
PersonName.prototype.elbows =2;

// проверим наличие данного добавленого
// свойства для johnyCash

document.write ("<br>" + johnyCash.toes);
console.log("->-----------------10-");


// создание объектов при помощи 
// Object.create
let PersonCreate = {
    eyes: 2,
    arms: 12,
    feet: 2
};
// создать объект jhonSmith на основе PersonCreate
let jhonSmith = Object.create(PersonCreate);
// проверка наличия унаследованных свойств
document.write ("<br>" + jhonSmith.arms);
console.log("->-----------------11-");