/* 
  Create a function `findAdults` that receives an array of objects representing users `{name: string, age: number}`.
  The function should return an array with the names of users who are 18 years old or older.
*/
export function findAdults(users) {
  // Your code here
}

/*
  Write a function named `capitalizeFirstLetters` that takes a sentence (string), 
  and capitalizes the first letter of each word in the sentence. If the input is not a string, the function should return an empty string.
*/
export function capitalizeFirstLetters(sentence) {
  // Your code here
}

/* 
  Write a function named `countOccurrences` that takes an array as an argument 
  and returns an object that represents the count of each unique element in the array.
  The keys of the returned object should be the unique elements, and the values should be the counts.
*/
export function countOccurrences(array) {
  // Your code here
}

/*
  Create a function named `applyToNumericKeys`. 
  This function should take an object and a function as arguments.
  It should apply the function to each numeric property value in the object and its nested objects (leaving non-numeric values as they are).
  The function should then return the new object.
*/
export function applyToNumericValues(obj, func) {
  // Your code here
}

/* 
  Write a function called `reduce` which transforms an array into a single value according to a specified reducer function.

  `reduce` will take three parameters:

  - An array of elements.
  - A callback function, referred to as the "reducer", which will be called for each item in the array. 
    The reducer takes two arguments: the accumulator, the current element in the loop, the current index, and the source array.
    The purpose of the reducer function is to use the current array element to update and return the accumulator in some way.
  - An optional initial value for the accumulator. If no initial value is provided, the first element in the array will be used.

  The `reduce` function should return the final accumulator value after iterating over the entire array.
*/
export function reduce(array, callback, initialValue) {
  // Your code here
}
