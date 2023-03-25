/**
 * Завершите метод/функцию, чтобы он преобразовывал слова,
 * разделенные тире/подчеркиванием, в верблюжий регистр.
 * Первое слово в выводе должно быть написано с заглавной
 * буквы только в том случае, если исходное слово было
 * написано с заглавной буквы (известный как верхний
 * верблюжий регистр, также часто называемый регистром
 * Паскаля). Следующие слова всегда должны быть написаны
 * с большой буквы.
 * 
 * Examples
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * 
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 * 
 * "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str) {

  const array = str.split('');

  const newArrey = array.reduce((prevElement, item,) => {

    let bufer = true;
    if (prevElement[prevElement.length - 1] === '-') {
      bufer = false;
    }
    if (prevElement[prevElement.length - 1] === '_') {
      bufer = false;
    }

    if (bufer === true) { return prevElement.concat(item) } else {
      return prevElement.concat(item.toUpperCase());
    };

  }, []);


  const result = newArrey.map(element => {
    if (element === '-') {
      return '';
    }

    if (element === '_') {
      return '';
    }
    return element;
  });
  return result.join('');
}

console.log(
  toCamelCase('the-stealth_warrior')
);

console.log(
  toCamelCase('The_Stealth_Warrior')
);

console.log(
  toCamelCase('The_Stealth-Warrior')
);

/*
function toCamelCase(str){
  return str.replace(/(_|-)(\w)/g, (a) => a[1].toUpperCase()) 
}
*/