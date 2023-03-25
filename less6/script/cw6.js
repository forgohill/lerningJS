/**
 *  Изограмма — это слово, в котором нет
 * повторяющихся букв, последовательных
 * или непоследовательных. Реализуйте функцию,
 * определяющую, является ли строка, содержащая
 * только буквы, изограммой. Предположим, что
 * пустая строка является изограммой.
 * 
 * Игнорировать регистр букв. 
 */

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



function isIsogram(str) {
  if (str === '') {
    return true
  }

  const array = str.toLowerCase().split('');

  const newArray = array.reduce((previous, current) => {
    const x = array.map(element => {
      if (current === element) {
        return 1
      } return 0;
    });

    const y = x.reduce((sum, elem) => {
      return sum + elem;
    }, 0);

    if (y >= 2) {
      return previous.concat(')');
    }
    return previous.concat('(');
  }, []);

  const result = newArray.some((item) => {
    return item === ')';
  })

  return !result;
}



console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moОse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));

console.log('========================')