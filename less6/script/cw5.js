/**
 *   Цель этого упражнения — преобразовать
 * строку в новую строку, где каждый символ
 * в новой строке — это «(», если этот
 * символ встречается в исходной строке только
 * один раз, или «)», если этот символ встречается
 * в исходной строке более одного раза. Игнорировать
 * заглавные буквы при определении, является ли
 * символ дубликатом.
 */

// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))((" 


function duplicateEncode(word) {
  const array = word.toLowerCase().split('');

  const newArrey = array.reduce((previous, current) => {
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
  return newArrey.join('');
}


console.log(
  duplicateEncode('din')
);

console.log(
  duplicateEncode('recede')
);

console.log(
  duplicateEncode('Success')
);

console.log(
  duplicateEncode('(( @')
);