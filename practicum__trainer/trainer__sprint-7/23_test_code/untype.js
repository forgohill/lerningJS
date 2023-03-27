// str, date, giveMeSomeInternet, Song 


// експорт переменных
export let str = 'я буду на улице';
export const date = [12, 22, 31];


// експорт функциии

export function giveMeSomeInternet() {
  return 'Нтерент';
}

// експорт класса
export class Song {
  constructor() {

  }
}



// Экспорт после создания

const array = [2, 3, 4, 5,];
const arrSqared = array.map(item => item * item);

// експорт нескольких значений
export { array, arrSqared }