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

  console.log(arg[string]);

  arg.key2 = arg[string];
  console.log('сработал ренеймер');
}


const findKey1 = (param) => {
  if (typeof param === 'undefined') {
    return;
  }

  if (Object.keys(param).includes('key1')) {
    console.log('Yes');
    renamer(param);
    delete param.key1;
  } else {
    console.log('No')
  }
};

const findKey2 = (param) => {
  if (typeof param === 'undefined') {
    return;
  }

  if (Object.keys(param).includes('key2')) {
    console.log('Yes');
    return true;
  } else {
    console.log('No')
  }
};


function zero(param) {
  const newObj = {};
  findKey1(param);
  newObj.key1 = 0;

  transferObj = Object.assign(newObj, param);

  console.log(
    findKey2(param)
  );

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

  console.log(
    findKey2(param)
  );


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




// console.log(
//   zero()
// )

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

















// console.log(zero(plus(one())))


// function two() { }
// function three() { }
// function four() { }
// function five() { }
// function six() { }
// function seven() { }
// function eight() { }
// function nine() { }


// function minus() { }
// function times() { }
// function dividedBy() { }

// console.log(zero.name);

// console.log(zero(zero(zero(zero))));

// console.log(
//   seven(times(five())) // 35
// );

// console.log(
//   four(plus(nine())) // 13
// );

// console.log(
//   eight(minus(three())) //  5
// );

// console.log(
//   six(dividedBy(two())) //  3
// );

element = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  plus: '+',
  minus: '-',
  times: '*',
  dividedBy: '/',
}