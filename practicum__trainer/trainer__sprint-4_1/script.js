let morningList = [
  'Встать с кровати',
  'Почистить зубы',
  'Сделать зарядку',
  'Позавтракать',
  'Помыть посуду'
];

// for (инициализация; условие; финальное выражение)
for (let i = 0; i < morningList.length; i += 1) {
  console.log(morningList[i]);
};

let i = 0;
while (i += 1) {
  console.log(morningList[i]);
  i < morningList.length;
}
// ===============================

function isLeapYear(year) {
  if ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) {
    return year + ' год - високосный';
  } else {
    return year + ' год - невисокосный';
  }
  return
}

isLeapYear(2020);
isLeapYear(2021);
isLeapYear(2022);

let year = 2020;

if ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) {
  console.log(year + ' год - високосный');
} else {
  console.log(year + ' год - невисокосный');
}

let employee = {
  firstName: 'Василий',
  lastName: 'Теркин',
  age: 28
};

function getFullName(employee) {
  return (employee.firstName + ' ' + employee.lastName);
}

getFullName(employee) = employee.fullName;
console.log(employee);

// ================================

function metresToFeet(metres) {
  if (typeof metres === 'string') {
    console.log('Эта функция имеет дело только с числами.');
  } else {
    const feetInMetre = 3.28;
    return feetInMetre * metres;
  }
}

const theEiffelTowerHeight = 324;

console.log(metresToFeet(theEiffelTowerHeight));
console.log(document);
console.log(typeof document.write);
console.log(typeof document.close);
console.log(typeof document.location);

// let password = null;

// while (typeof password === 'null') {
//   password = prompt('Введите пароль:');
// }

const password = 'qwerty';

if (password.length < 8) {
  console.log('И это, по-вашему, надёжный пароль?');
}


const acrostic = [
  'Ангел лёг у края небосклона.',
  'Наклонившись, удивлялся безднам.',
  'Новый мир был синим и беззвездным.',
  'Ад молчал, не слышалось ни стона.',
  ' ',
  'Алой крови робкое биенье,',
  'Хрупких рук испуг и содроганье.',
  'Миру лав досталось в обладанье',
  'Ангела святое отраженье.',
  'Тесно в мире! Пусть живёт, мечтая',
  'О любви, о грусти и о тени,',
  'В сумраке предвечном открывая',
  'Азбуку своих же откровений.'
];

let annaAkhmatova = '';
// Объявляем переменную, в которой будет собрана итоговая строка

for (let i = 0; i < acrostic.length; i += 1) {
  annaAkhmatova += acrostic[i];
}
console.log(annaAkhmatova);

console.log(Infinity - 1000000000000000000000000000000000000000000);
console.log(-Infinity - 1000000000000000000000000000000000000000000);
console.log(Infinity + 1000000000000000000000000000000000000000000);
console.log(Infinity - 1000000000000000000000000000000000000000000);


//=========================================

/*
=IF(E6 = "ЯНВАРЬ"; ('Анализ расходов'!B3);
IF(E6 = "ФЕВРАЛЬ"; ('Анализ расходов'!B4);
IF(E6 = "МАРТ"; ('Анализ расходов'!B5);
IF(E6 = "АПРЕЛЬ"; ('Анализ расходов'!B6);
IF(E6 = "МАЙ"; ('Анализ расходов'!B7);
IF(E6 = "ИЮНЬ"; ('Анализ расходов'!B8);
IF(E6 = "ИЮЛЬ"; ('Анализ расходов'!B9);
IF(E6 = "АВГУСТ"; ('Анализ расходов'!B10);
IF(E6 = "СЕНТЯБРЬ"; ('Анализ расходов'!B11);
IF(E6 = "ОКТЯБРЬ"; ('Анализ расходов'!B12);
IF(E6 = "НОЯБРЬ"; ('Анализ расходов'!B13);
IF(E6 = "ДЕКАБРЬ"; ('Анализ расходов'!B14); "NO RESOURCES")
)
)
)
)
)
)
)
)
)
)
)

// =========================================

=IF(E6 = "ЯНВАРЬ"; ('Свод'!I5);
IF(E6 = "ФЕВРАЛЬ"; ('Свод'!I6);
IF(E6 = "МАРТ"; ('Свод'!I7);
IF(E6 = "АПРЕЛЬ"; ('Свод'!I8);
IF(E6 = "МАЙ"; ('Свод'!I9);
IF(E6 = "ИЮНЬ"; ('Свод'!I10);
IF(E6 = "ИЮЛЬ"; ('Свод'!I11);
IF(E6 = "АВГУСТ"; ('Свод'!I12);
IF(E6 = "СЕНТЯБРЬ"; ('Свод'!I13);
IF(E6 = "ОКТЯБРЬ"; ('Свод'!I14);
IF(E6 = "НОЯБРЬ"; ('Свод'!I15);
IF(E6 = "ДЕКАБРЬ"; ('Свод'!I16); "NO RESOURCES")
)
)
)
)
)
)
)
)
)
)
)
*/

/**
 * функция для сложения четных чисел в массиве
 * 
 * 
 */
function evenSum(numbers) {
  let sum = 0;
  
  for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    
    if(number % 2 === 0) {
      console.log(number); // Ошибка где-то здесь!
      sum += number;
    }
  }
  
  return sum;
}

// Правильный результат: 2 + 4 = 6
console.log(evenSum([1, 2, 3, 4]));

// Правильный результат: 2 + 10 + 16 = 28
console.log(evenSum([5, 2, 10, 1, 99, 16])); 
