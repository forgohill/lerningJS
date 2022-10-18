// создание объектов
let userInfo1 = new Object();// синтаксис конструктор объекта
let userInfo2 = {};// синттаксис литерал объекта

// свойства объекта - ключ + значение

let userInfo3 = {
    name: "Вася", // свойства объекта
    age: 30, // последняя висячая запятая
};

console.log(userInfo3);
console.log(userInfo3.name);
console.log("-------------------");

// Имена свойств

let userInfo4 = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};

console.log(userInfo4);
console.log(userInfo4.name);
console.log(userInfo4["likes javascript"]);
console.log(userInfo4["name"]);
console.log("------------------4-");

// вычисляем имя

let firstPart = "likes";
let userInfo5 = {
    name: "Вася",
    age: 30,
    [firstPart + " javascript"]: true,
};

console.log(userInfo5["likes javascript"]);
console.log("------------------5-");

// передаем имя

let firstPart2 = "likes javascript";
let userInfo6 = {
    name: "Вася",
    age: 30,
    [firstPart2]: true,
};

console.log(userInfo6[firstPart2]);
console.log("------------------6-");

// преимущество квадратных скобок
let key = "name";
console.log(userInfo6[key]);
console.log("------------------6.1-");

// использование зарезервированных слов в именах свойств

let userInfo7 = {
    let: "Вася", // свойства объекта
    for: 30, // последняя висячая запятая
};

console.log(userInfo7);
console.log(userInfo7.for);
console.log(userInfo7.let);

console.log("------------------7-");
// если использовать в качестве имени цифры - то 
// они вызываться будут как строки
let userInfo8 = {
    0: "Вася- 8", 
};
console.log(userInfo8[0]);
console.log(userInfo8["0"]);
console.log("------------------8-");

// Тип данных символ Sumbol
let id = Symbol ("id");
let userInfo9 = {
name: "Вася",
age:30,
[id]: "Некое значение",
};
console.log(userInfo9);
console.log("------------------9-");


// Вложенность
let userInfo10 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Нижний Новгород",
        street: "Тонкинская",
    }
};

console.log(userInfo10);
console.log(userInfo10.address);
console.log(userInfo10.address.city);
console.log("------------------9-");


function makeUserInfo11(name, age) {
    return {
        name: name,
        age: age,
        // другие свойства
        
    }
}
let user11 = makeUserInfo11 ("Вася",30);
console.log(user11);
console.log("------------------11-");