const preaks = ['Talac', 'Putjazi', 'Murat',];
const canyons = ['Ward', 'Germini', 'Jazi',];
const taho = [...canyons, ...preaks];

console.log(taho.join(', '));

const [last] = [...preaks].reverse();

document.querySelector('.insert__text').textContent = "Тут текст"

console.log(last);
console.log(preaks);

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade",];

const [first, ...other] = lakes;
console.log(other.join(', '));
console.log(first);
const testOne = document.querySelector('.div__test-1');
const testTwo = document.querySelector('.div__test-2');
const testThree = document.querySelector('.div__test-3');
const testАour = document.querySelector('.div__test-4');


function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();
  testOne.textContent = `по ходу следования ${args.length} городов`;
  testTwo.textContent = ` стартуем в ${start}`;
  testThree.textContent = `конец поездки в ${finish}`;
  testАour.textContent = `на пути следования ${stops.length} остановки`;
}
directions('турецкая', 'сокольская', 'миедвежая', 'услужная', 'хуецкая', 'петербуржская',);


const morniung = {
  breackfast: 'oatmeal',
  lunch: 'peanut butter an jelly'
};

const dinner = 'mac and cheese';

const backpackingMeals = {
  ...morniung,
  dinner
};

console.log(backpackingMeals);




/*
<span class="div__test-1"></span>
<hr>
<span class="div__test-2"></span>
<hr>
<span class="div__test-3"></span>
<hr>
<span class="div__test-4"></span> 
*/