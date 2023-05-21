// const map1 = new Map();

// map1.set('a', 11)
// map1.set('b', 66)
// map1.set('z', 22)
// map1.set('c', 33)
// console.log(map1);

// // for (const item of map1) console.log(item);


// // console.log(map1.clear());

// console.log(map1);

// console.log([...map1.values()]);


const map = new Map();
map.set('0', '1');
map.set('s2', '2s');
map.set('s3', 's3');

const arr = [...map.values()];

console.log(arr)

const result = arr
  .map((value) => {
    return parseInt(value, 10);
  });

console.log(result);
console.log(parseInt("15e2", 10));

