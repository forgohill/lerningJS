import { str, date, giveMeSomeInternet, Song } from "./untype.js";

console.log(str);
console.log(date);

giveMeSomeInternet();

const newClass = new Song();
console.log(newClass);

import { array, arrSqared } from "./untype.js";

console.log('Экспорт после создания');
console.log(array);
console.log(arrSqared);



console.log('Экспорт с другим именем: директива export as');
import { arr, sq } from "./constans.js";

console.log(arr);
console.log(sq);


console.log('Директива import');
import * as data from "./data.js";

console.log(data.array);
console.log(data.arrSqared);
console.dir(data);

console.log('Экспорт и импорт по умолчанию');

import renderItems from './render-items.js';
import Song2 from './song2.js';
import someArr from './data2.js';

renderItems();
const newClass2 = new Song2();
console.log(newClass2);
console.log(someArr);
