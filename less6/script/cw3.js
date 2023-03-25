/**
 * Напишите функцию, которая принимает строку
 * из одного или нескольких слов и возвращает
 * ту же строку, но с перевернутыми всеми словами
 * из пяти или более букв (точно так же, как имя
 * этого Ката). Передаваемые строки будут состоять
 * только из букв и пробелов. Пробелы будут включены
 * только в том случае, если присутствует более
 * одного слова.
 */

// spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
// spinWords("This is a test") => returns "This is a test"
// spinWords("This is another test")=> returns "This is rehtona test"

function spinWords(string) {

  const arrWords = string.split(' ');
  const newArrWords = arrWords.map((element, index, array) => {
    const arrElement = element.split('');

    if (arrElement.length <= 4) {
      return arrElement.join('');
    } else {
      return arrElement.reverse().join('');
    }
  });
  return newArrWords.join(' ');
}

console.log(
  spinWords("Hey fellow warriors")
);

console.log(
  spinWords("This is a test")
);

console.log(
  spinWords("This is another test")
);

/**
 * оптимальное решение
 * function spinWords(words){
 *  return words.split(' ').map(function (word) {
 *    return (word.length > 4) ? word.split('').reverse().join('') : word;
 *  }).join(' ');
 * }
 */