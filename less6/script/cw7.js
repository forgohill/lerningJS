/**
 * Серия для начинающих №3 Сумма чисел
 * Даны два целых числа a и b, которые
 * могут быть положительными или отрицательными,
 * найдите сумму всех целых чисел между ними
 * и включая их и верните ее. Если два
 * числа равны, верните a или b.
 * 
 *  Примечание: a и b не упорядочены!
 */

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum(a, b) {
  if (a === b) { console.log(a); return a };

  const arrayDelta = [];
  let c, d;

  if (a < b) { c = a; d = b; } else { c = b; d = a; };

  for (let i = c; i <= d; i++) { arrayDelta.push(i); };

  const newArray = arrayDelta.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return newArray;
}

getSum(0, -1);
getSum(0, 1);
getSum(2, 2);
getSum(100, -12);


// оптимальный
// const GetSum = (a, b) => {
  // let min = Math.min(a, b),
  // max = Math.max(a, b);
// return (max - min + 1) * (min + max) / 2;
// }