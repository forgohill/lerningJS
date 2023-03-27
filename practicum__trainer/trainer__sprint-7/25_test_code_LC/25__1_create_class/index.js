// Инкапсуляция

/*
let beast = 'Кот';
let sound = 'Мау!';
const makeSound = function (who, what) {
  console.log(who + ' сказал ' + '"' + what + '"');
};
makeSound(beast, sound);

beast = 'Собакен';
sound = 'Гав-гав';
makeSound(beast, sound);
*/

//  переписываем на классы
/*
const cat = new Creature('Кот', 'Мау!');
cat.makeSound();

const dog = new Creature('Собакен', 'Гавкен-гавкен');
dog.makeSound();

const woodpecker = new Bird('Дятел', 'Туки Туки Туки');

woodpecker.makeSound();
woodpecker.clapWings();
*/


// Полиморфизм
const cat = new Creature('Кот', 'Мау!');
const tiger = new Creature('Тигр', 'РррРррррР-р-р!');
const monkey = new Animal('Орангутанг', 'Я не люблю JavaScript!!!');
const woodpecker = new Bird('Дятел', 'Туки Туки Туки');

const hacker = {};
hacker.makeSound = () => console.log('Петя взломал пентагон');


const zoo = new Zoo([cat, tiger, monkey, woodpecker, hacker]);
zoo.makeSoundsOfNature();