const timer = () => {
  console.log('timer');
  setTimeout(callback, 0);
}
const callback = () => {
  console.log('callback')
  timer();
}
// timer();



// const promise1 = new Promise((res, rej) => {

//   setTimeout(
//     function () {
//       res('foo');
//     }, 2000);

// });

// promise1
//   .then((value) => {
//     console.log(value);
//   });

// const promise1 = function () {
//   const p1 = new Promise((res, rej) => {
//     setTimeout(
//       function () {
//         res('foo');
//       }, 2000);
//   });
//   p1.then((value) => {
//     console.log(value);
//     // expected output: 'foo';
//     promise2();
//   })
// };

// const promise2 = function () {
//   const p2 = new Promise((res, rej) => {
//     setTimeout(
//       function () {
//         res('bar');
//       }, 2000);
//   });
//   p2.then((value) => {
//     console.log(value);
//     // expected output: 'foo';
//     promise1();
//   })
// };

// promise1();


const promise1 = new Promise((res, rej) => {
  setTimeout(function () {
    res('foo');
  }, 2000);

  setInterval(() => {
    new Promise((res2, rej) => {
      console.log(3);
      res2(3);
    }, 1000);
  }, 1);
});

promise1.then(value => { console.log(value) });