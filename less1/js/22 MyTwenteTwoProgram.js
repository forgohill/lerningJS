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


function makeUserInfo12(name,age) {
    return {
        name,
        age,
        "likes javascript": true,
    }
}
let user12 = makeUserInfo12("Вася",30);
console.log(user12);
console.log("------------------12-");

// изменение объекта
// добавление объекта
let userInfo13 = {
    name: "Вася-13",
}
console.log(userInfo13);

userInfo13.age = 30;

console.log(userInfo13);

userInfo13["likes javascript"] = true;

console.log(userInfo13);

userInfo13.adress = {
    city: "Нижний Новгород",
    street: "Тонкинская",
};

console.log(userInfo13);

console.log("------------------13-");

// удаление свойств
let userInfo14 = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};

console.log(userInfo14);

delete userInfo14.age;

console.log(userInfo14);

delete userInfo14["likes javascript"];

console.log(userInfo14);

console.log("------------------14-");

// изменение свойств

let userInfo15 = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};

userInfo15.age = 15;

console.log(userInfo15);
console.log("------------------15-");

const userInfo16 = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};

userInfo16.age = 17;

console.log(userInfo16);
console.log("------------------16-");

//  копирование объектов в другую переменную
//  сам объект не дублируется, а копируется
//  только ссылка на него

let userInfo17 = {
    name: "Вася",
    age: 30,
};

let user17 = userInfo17;

console.log(user17);

user17.age = 18;

console.log(user17);

console.log(userInfo17);
console.log("------------------17-");

// дублирование объекта
let userInfo18 = {
    name: "Вася",
    age: 30,
};

let user18 = Object.assign ({}, userInfo18)
user18.age = 18;
console.log(user18);
console.log(userInfo18);
console.log("------------------18-");

// дублирование нескольких свойств 
// из объекта в новый объект

let userInfo19 = {
    name: "Вася",
    age: 30,
};
Object.assign (userInfo19, {['likes javascript']:true, city:"Нижний Новгород",})
console.log(userInfo19);
console.log("------------------19-");

// проверка существования свойств
// проверка c помощью if
let userInfo20 = {
    name: "Вася",
    // age: 30 ,
};
if (userInfo20.age) {
    //true или false
    console.log(userInfo20.age);
};
console.log("------------------20-");

// проверка существования свойств
// опциональная цепочка
let userInfo21 = {
    name: "Вася",
    age: 30,
    // address: {
        // city: "Нижний Новгород",
        // street: "Тонкинская",
    // }
};

// console.log(userInfo21.address.street);
console.log(userInfo21?.address?.street);
console.log("------------------21-");

// проверка существования свойств
// оператор "in"
let userInfo22 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Нижний Новгород",
        street: "Тонкинская",
    }
};
if ("name" in userInfo22) {
    console.log ("userInfo22 have name");
    console.log (userInfo22.name);
}

console.log("------------------22-");

// пример когда используется 
// оператор in
// когда одно из свойств undefined
let userInfo23 = {
    name: undefined,
    age: 30 ,
};
if (userInfo23.name) {
    //true или false
    console.log(userInfo23.name);
};

if ("name" in userInfo23) {
    console.log ('userInfo23 name "undefined"');
    console.log (userInfo23.name);
}
console.log("------------------23-");

// пример использования
// оператора «for... in »
let userInfo24 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Нижний Новгород",
        street: "Тонкинская",
    }
};
for (let key in userInfo24) {
    console.log(key); // name,age, address
    // значения ключей
    console.log(userInfo24[key]);
    // Вася, 30, Object
};

for (let key in userInfo24.address) {
    // ключи
    console.log(key); // city,street
    // значения ключей
    console.log(userInfo24.address[key]);
    // Нижний Новгород, Тонкинская
};
console.log("------------------24-");

// МЕТОДЫ
// присваиваем одному из свойств
// функцию (называем метод)

let userInfo25 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Нижний Новгород",
        street: "Тонкинская",
    }
,
    showInfo25: function() {
        console.log(`${userInfo25.name}, ${userInfo25.age} лет. Адрес: г.${userInfo25.address.city}, ул. ${userInfo25.address.street}`);
},
};
userInfo25.showInfo25 ();
console.log("------------------25-");

// уокроченная запись::
// как присвоить функцию - свойству объекта

let userInfo26 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Нижний Новгород",
        street: "Тонкинская",
    }
,
    showInfo26 () {
    console.log(`${userInfo26.name}, ${userInfo26.age} лет. Адрес: г.${userInfo26.address.city}, ул. ${userInfo26.address.street}`);
},
};
userInfo26.showInfo26 ();
console.log("------------------26-");

