// Objects
  // Object syntax and property access
  const a = "str";
  const obj = {
    prop1: "value",
    "prop with spaces": "value",
    [a]: "value2"
  };
  
  console.log(obj)

  // in operator

  console.log("prop1" in obj)
  console.log("nonexistent" in obj)

  // for..in

  for (const key in obj) {
    console.log(key)
    console.log(obj[key])
  }

  // Object references and copying
{
  const obj1 = {
    a: 1,
    b: 2
  }

  const obj2 = obj1;

  obj1.a = 5;

  console.log(obj2)
  console.log(obj1 == obj2)
}
{
  const obj1 = {
    a: 1,
    b: 2
  }

  // const obj2 = structuredClone(obj1);

  // obj1.a = 5;

  // console.log(obj2)
}

{
  const obj1 = {
    a: 1,
    b: 2
  }

  obj1.a = 5;
  console.log(obj1);
}

{
  let obj1 = {
    a: 1,
    b: 2
  }

  let obj2 = obj1;
  obj1.c = 6;
  obj1 = { c: 5 };

  console.log(obj1);
  console.log(obj2);
  console.log(obj1 == obj2)
}

{
  const a = {};

  a.prop1 = 5;
  a.prop2 = 5;

  console.log(a);

  a["prop1"] = 6;
  console.log(a["prop1"]);
}
  // Object == and ===
  {
    const a = {};
    const b = {};

    console.log(a == b);
  }
  // const objects
  {
    const a = {
      // can change properties
    }; 
  }
  // structuredClone
  // Optional chaining '?.'
  {
    const obj = {
      a: {
        a1: 1,
        a2: 2
      },
      b: {
        b1: 1,
        b2: 2
      },
      func: (a, b) => a + b 
    };

    console.log(obj.a);
    console.log(obj.c);
    // console.log(obj.c.c1); // error
    console.log(obj?.c?.c1);
    console.log(obj?.["prop with spaces"])
    console.log(obj?.func?.(5, 6))
    console.log(obj?.funcNonExistent?.(5, 6))
    // console.log(obj?.funcNonExistent(5, 6)) // error
  }

// Arrays
  // Array syntax
  {
    const arr = [1, 2, "str"]
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[99]);
    console.log(arr.length);
    console.log(typeof arr);
    for (const key in arr) {
      console.log(key)
    }
    for (const value of arr) {
      console.log(value)
    }
  }
  // Array methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  {
    const arr = [1, 2, 3];
    console.log(arr[-1]);
    console.log(arr.at(-1));
    const arr2 = arr.map((el) => el ** 2);
    console.log(arr2);
    console.log(arr.filter(e => e > 2));
  }
  // Arrays are objects
  // for..of
  // Object.keys(), Object.values(), Object.entries()
  {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    for (const key of Object.keys(obj)) {
      console.log(key);
    }
    for (const value of Object.values(obj)) {
      console.log(value);
    }
    for (const entry of Object.entries(obj)) {
      console.log(entry);
    }
    for (const [key, value] of Object.entries(obj)) {
      console.log(key);
      console.log(value);
    }
  }

// Destructuring
{
  const arr = [1, 2, 3];
  const [a, b] = arr;
  console.log(a, b);

  const obj = {
    p1: 5,
    p2: 6
  }

  const { p1, p2 } = obj;
  console.log(p1);

  const { p2: otherName } = obj;
  console.log(otherName);

  const { p: [{x: some}, d] } = {
    p: [{
      x: 6
    }, 2]
  }
  console.log(some)
}
  // assignment
  // function parameter and default
  function func({ option1 = 1, option2, option3 }) {
    console.log(option2);
    console.log(option1)
  }

  func({
    option3: 1,
    option2: 5
  });
  // rest and spread
  {
    const arr = [1,2,3,4,5];
    const [a, b, ...rest] = arr;
    console.log(a)
    console.log(b)
    console.log(rest)

    function f(...args) {
      for (const a of args) {
        console.log(a);
      }
    }

    f(1, 2, 3, 4);

    function f2({a, b, ...rest}) {
      console.log(a, b);
      console.log(rest)
    }

    f2({
      a: 5,
      c: 6,
      d: 7
    });

  }
  {
    const arr = [1, 2, 3];

    const arr2 = [5, 6, ...arr, 7, 8];
    console.log(arr2);
    const arr3 = [5, 6, arr, 7, 8];
    console.log(arr3);

    const obj = { a: 1, b: 2};
    const obj2 = { a: 5, c: 6, d: 7};

    const merged = {
      ...obj,
      ...obj2
    }
    console.log(merged);

    const merged2 = {
      ...obj2,
      ...obj
    }
    console.log(merged2);
  }

  {
    const obj1 = {
      a: 1,
      b: 2,
      nested: {
        d: 10
      }
    }

    const obj2 = {...obj1};

    obj1.a = 5;
    obj1.nested.d = 11;

    console.log(obj1);
    console.log(obj2);
  }

// JSON, JSON methods

// Error handling
  // try catch finally
  // global catch - Environment-specific


// Callbacks and promises - next time