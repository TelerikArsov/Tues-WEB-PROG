const doSomething = (ms, result, throwError) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error("Something went wrong"));
      } else {
        resolve(result);
      }
    }, ms);
  });

// doSomething(1000, "first promise finished")
//   .then((result) => {
//     console.log(result);
//     const p1 = doSomething(1000, "p1 promise finished");
//     throw new Error("Error in the second promise");
//     const p2 = doSomething(1000, "p2 promise finished");
//     return p1;
//   })
//   .then((result) => {
//     console.log(result);
//     return doSomething(1000, "third promise finished");
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("Caught error", err);
//   });

async function f() {
  const promise = doSomething(1000, "result1", true);
  try {
    const value = await promise;
    console.log(value);
  } catch (e) {
    console.log("error caught: ", e);
  }
}

// equivalent to:
function g() {
  doSomething(1000, "result1")
    .then((value) => {
      console.log(value);
    })
    .catch((e) => {
      console.log("error caught: ", e);
    });
}

f();
