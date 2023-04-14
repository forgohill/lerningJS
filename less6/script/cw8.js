/**
 * Расчет с функциями
 * 
 * На этот раз мы хотим написать вычисления с
 * использованием функций и получить результаты.
 * Давайте посмотрим на некоторые примеры:
 * 
 * seven(times(five())); // must return 35
 * 
 * four(plus(nine())); // must return 13
 * 
 * eight(minus(three())); // must return 5
 * 
 * six(dividedBy(two())); // must return 3
 * 
 * Требования:
 * 
 * Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять")
 * Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить.
 * Каждое вычисление состоит ровно из одной операции и двух чисел
 * Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
 * Деление должно быть целочисленным . Например, это должно возвращать 2, а не 2.666666...:
 * 
 * eight(dividedBy(three()));
 */


console.log('restart-------------------------------------------------------------------------------')

console.log('__')

const renamer = (arg) => {
  const newArrey = Object.keys(arg);
  let string = '';
  newArrey.forEach((item, index) => {
    string += item;
    if (index != (newArrey.length - 1)) {
      string += ',';
    }
  });
  arg.key2 = arg[string];
}


const findKey1 = (param) => {
  if (typeof param === 'undefined') {
    return;
  }

  if (Object.keys(param).includes('key1')) {
    renamer(param);
    delete param.key1;
  } else {
    return;
  }
};

const findKey2 = (param) => {
  if (typeof param === 'undefined') {
    return;
  }

  if (Object.keys(param).includes('key2')) {
    return true;
  } else {
    return;
  }
};


function zero(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 0;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}

function one(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 1;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}


function two(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 2;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}


function three(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 3;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}

function four(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 4;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}

function five(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 5;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}

function six(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 6;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}

function seven(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 7;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}

function eight(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 8;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}

function nine(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 9;

  transferObj = Object.assign(newObj, param);

  if (findKey2(param)) {
    return transferObj.operator(transferObj.key1, transferObj.key2);
  } else {
    return transferObj;
  }
}




function plus(param) {
  const newObj = {};
  findKey1(param);
  newObj.operator = function plus(key1, key2) {
    return key1 + key2;
  };

  transferObj = Object.assign(newObj, param);

  return transferObj;
}

function minus(param) {
  const newObj = {};
  findKey1(param);
  newObj.operator = function minus(key1, key2) {
    return key1 - key2;
  };

  transferObj = Object.assign(newObj, param);

  return transferObj;
}


function times(param) {
  const newObj = {};
  findKey1(param);
  newObj.operator = function minus(key1, key2) {
    return key1 * key2;
  };

  transferObj = Object.assign(newObj, param);

  return transferObj;
}
function dividedBy(param) {
  const newObj = {};
  findKey1(param);
  newObj.operator = function minus(key1, key2) {
    return Math.trunc(key1 / key2);
  };

  transferObj = Object.assign(newObj, param);

  return transferObj;
}




console.log(
  zero()
)

console.log('=======PLUS=======')

console.log(
  zero(plus(one()))
)

console.log('==============')
console.log('__')
console.log('==========MINUS====')
console.log(
  zero(minus(one()))
)
console.log('==============')

console.log(
  seven(times(five())) // 35
);

console.log(
  four(plus(nine())) // 13
);

console.log(
  eight(minus(three())) //  5
);

console.log(
  six(dividedBy(two())) //  3
);


console.log(
  eight(dividedBy(three()))
);



/** ИДЕАЛЬНОЕ РЕШЕНИЕ
 * 
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b
 */