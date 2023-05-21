const VALID_STATUSES = new Set([
  'SUCCES',
  'FINAL',
  'DONE',
]);

const people = [
  { name: 'Max', age: 20, status: 'IN_PROGRESS' },
  { name: 'Sam', age: 21, status: 'DONE' },
  { name: 'Dan', age: 30, status: 'SUCCES' },
];

const peopleWidthValidStatus = people
  // ???
  .filter(person => VALID_STATUSES.has(person.status))
  .map(person => person.name);

console.log(peopleWidthValidStatus); // ['Sam', 'Dan'];