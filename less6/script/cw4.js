/**
 * Ваша задача состоит в том,
 * чтобы создать функцию, которая может
 * принимать любое неотрицательное целое
 * число в качестве аргумента и
 * возвращать его с цифрами в порядке убывания.
 *
 * По сути, переставьте цифры, чтобы
 * получить максимально возможное число.
 */

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  const array = String(n).split('');
  const result = array.map(element => {
    return Number(element);
  });
  return Number((result.sort((a, b) => { return b - a })).join(''));
}

let result = descendingOrder(0);
console.log(result);
console.log(typeof (result));
result = descendingOrder(42145);
console.log(result);
console.log(typeof (result));
result = descendingOrder(145263);
console.log(result);
console.log(typeof (result));
result = descendingOrder(123456789);
console.log(result);
console.log(typeof (result));
