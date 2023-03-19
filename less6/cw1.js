function solution(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(i);
    // console.log(i);
    // console.log(array);

  }
  console.log(array);
  let sum = 0;
  array.map((item) => {
    if (item % 3 === 0) {
      sum += item;
    } else if (item % 5 === 0) {
      sum += item;
    }
  });

  return sum;
}


solution(10);
solution(20);
solution(100);
solution(1000);