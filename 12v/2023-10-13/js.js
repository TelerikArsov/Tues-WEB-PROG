// const arr = [1, 2];

// // const [a, b] = arr;

// // const a = arr[0];
// // const b = arr[1];

// // function f([a, b]) {
// //   console.log(a + b);
// // }

// function f(arr) {
//   console.log(arr[0] + arr[1]);
// }

// f(arr);

// const f = (a, b) => a + b; // arrow function

// const g = a => a + 1;

// const h = ([a, b]) => a + b; // arrow function with destructuring parameters

// const arr = [1, 2];
// const b = arr[2] && arr[1];
// console.log(b); // undefined

// const arr = [1, 2];
// const b = arr[1] && arr[2];
// console.log(b); // undefined

// const b = false && f(); // f няма да се извика! - short circuiting
// console.log(b); // undefined

// ? :

// const obj = { a: 5, b: 6 };

// // const {a, b} = obj;

// const a = obj.a;
// const b = obj.b;

// function f({ a, b }) {
//   // a is x => "Hello," + x
//   // b is undefined
//   return a(b); // (x => "Hello," + x)(undefined)
// }

// console.log(
//   f({
//     a: (x) => "Hello," + x,
//   })
// );

// let a = 5;
// a = (x) => x * 2;

// a(5);

// const result = ((x) => "Hello," + x)(undefined);

// const x = 5;

// x(); // TypeError: x is not a function

// function f(a, b = "c") {
//   // a is {a: 1, b: 2}
//   // b is "c"
//   // a[b] is a["c"] => undefined
//   // a[b].c is undefined.c => TypeError: Cannot read property 'c' of undefined
//   return a[b].c;
// }

// const result = f({
//   a: 1,
//   b: 2
// });

// const obj = {
//   a: 1,
//   b: 1,
//   "a b": 1,
// };

// obj.a;
// obj["a b"];

// console.log(result);
