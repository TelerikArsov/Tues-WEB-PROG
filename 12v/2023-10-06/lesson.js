// Code structure

// Statements
{
  console.log(1);
  console.log(2);
  function f() {
    // error:
    return
      1 + 1;
  }
}
// Semicolons

// Comments
/* asdfsafd */

// Strict mode - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Variables
function f () {
  if (true) {
    let a = 1;
    var b = 2;
  }
  c = 5;

  // console.log(a);
  console.log(b);
}

f();
// console.log(c)
{
  const a = 5;
}
{
  let a = 6;
  
  a = "str";
  
  console.log(a);
}
// Data types
  // Primitive - unefined, number, bigint, boolean, string, symbol
  {
  console.log(typeof "str")
  console.log(typeof 1)
  console.log(typeof 1.123)

  // function f(a) {
  //   if (typeof a != "string"){
  //     throw new Error();
  //   }
  // }
  console.log(typeof undefined);
  console.log(12123312312312312312313123123132n)
  console.log(12123312312312312312313123123132)
  console.log(12123312312312312312313123123132 + 1)
  console.log(typeof true)
  console.log(typeof false)
  // Non-primitive - object
  const o = {
    asdf: "str",
    o1: {
      // ..
    }
  };
  console.log(typeof null)
}

// Type conversions
  // String Conversion
  const a = {
    toString: function() {
      return "neshto";
    }
  }

  const b = {
    toString() {
      return "nestho";
    }
  }

  console.log(a + "")

  console.log("123" + "123")
  console.log("123" + 123)
  console.log(123 + "123")
  // Numeric Conversion
  console.log(123 + 123)
  console.log("123" / "123")
  // Boolean Conversion
  console.log(Boolean(0))
  console.log(Boolean("0"))
  console.log(Boolean(""))
  console.log(Boolean({}))
  console.log(Boolean([]))
  console.log(Boolean(false))
  console.log(Boolean(undefined))
  console.log(Boolean(null))
  // false, undefined, null, "", 0 -> false
  // ^ falsy values
  // v truthy values
  // all other -> true
  if (null) {
    console.log("here")
  }

  if ("neshto") {
    console.log("here")
  }

  const o = {
    a: "A",
    b: "B"
  }
  console.log(o.c)
  if (o.c) {
    console.log("here")
  }
  
// Operators
  // Numeric + - * / % ** +
  console.log(2 ** 3)
  console.log(3 - 2)
  console.log(- 2)
  console.log(+ 2)
  console.log(+ 2)
  console.log(+ "123")
  console.log(typeof + "123")
  console.log(typeof "123")
  // String +
  console.log("hello" + "world")
  // ++  --
  let i = 0;
  i++;
  ++i;
  console.log(i);
  // Bitwise & | ^ ~ << >> >>>
  console.log(2 | 1)
  console.log(0b10 | 0b01)
  console.log(2 ^ 3) // XOR
  // Comparisons < > <= >= == != === !==
  console.log(1 < 2)
  console.log(3 >= 4)

  console.log(1 == 1)
  console.log(1 === 1)

  console.log(1 == "1")
  console.log(1 === "1")

  console.log("1,2" == [1,2])

  console.log(1 != "1")
  console.log(1 !== "1")
  // Be careful with automatic type conversions!
  // Logical || && ! ??
  console.log(1 && 2)
  console.log(1 || 2)

  const some = 0;
  console.log(some || "neshto")

  console.log(!"neshto")

  // ?? - nullish coalesce operator
  // null, undefined
  console.log(some ?? "neshto")
  console.log(some === undefined || some === null ? "neshto" : some)

  const v = 5;
  let u;
  console.log(u);
  u = 5;
  console.log(u);

  console.log((v > 6) && "neshto")
  console.log((v > 2) && "neshto")

// Conditionals - if, ?:, switch
if (v >= 5) {
  console.log("here")
}

if (v >= 5)
  console.log("here")

console.log(v > 5 ? "a" : "b");
console.log(v > 5 ? "a" : 123);

// Loops - while, do while, for
while(1){
  //...
}

// Functions
  // Declaration

  function f(param1, param2) {
    console.log(param1, param2);
    return param1 + param2;
  }

  console.log(f(1, 2))  // 3

  // Parameters
  // Default parameters
  function f(param1, param2 = 0) {
    console.log(param1, param2);
    return param1 + param2;
  }
  // Function expressions
  const variable = function f(param1, param2) {
    console.log(param1, param2);
    return param1 + param2;
  }

  console.log(variable(1, 2));

  // valid: f(function g() {});
  // IIFEs - Immediately invoked function expressions

  // Callbacks
  function func(callback) {
    const calculations = 1 + 2 + 3;

    callback(calculations);
  }

  func(function (result) {
    console.log(result);
  })
  // result = func();
  // Arrow functions
  const arrowFunc = (a, b, c) => a + b * c; 
  const arrowFuncWithBody = (a, b, c) => {
    return a + b * c;
  };
  const arrowFuncOneParam = a => {
    return a * 2
  };

  const funcReturnsObject = a => {
    return {};
  }

  console.log(funcReturnsObject())
  
  function returnsUndefined() {

  }

  console.log(returnsUndefined()) // undefined

  const funcReturnsObjectWrong = a => {}; // returns undefined
  const funcReturnsObjectCorrect = a => ({}); // returns object
  

