var x = 10;

function bar(funArg) {
  var x = 30;
  funArg();
}

function foo() {
  console.log(x);
}

foo.x = 20;
bar.x = 40;

bar(foo);


let z = 66;

function f1(ffff) {
  let z = 55;
  ffff();
}

function f2() {
  console.log(z);
}

f1(f2);