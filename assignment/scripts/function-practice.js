console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return name;
}
console.log("Hello ", helloName("Mohamed"));
// Remember to call the function to test

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber) {
  let secondNumber = 40;
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log("Adding two number & returning the result: ", addNumbers(50));

// 4. Function to multiply three numbers & return the result
function multiplyThree() {
  return 4 * 6 * 2;
}
console.log("the total multiplication of three number is: ", multiplyThree());
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
console.log("checking weather returns(True or False) :", isPositive(5));
console.log("checking weather returns(True or False) :", isPositive(-4));
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length == 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}
const findLastArray = [1, 2, 3, 4, 5];

console.log("The last Item array is: ", getLast(findLastArray));

const emptyArray = [];
console.log("The last Item array is: ", getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let index = 0; index < array.length; index++) {
    if (value == array[index]) {
      return true;
    }
  }
  return false;
}

const findvalueArr = [10, 45, 70];
const findvalue = 70;
const notFoundValue = 200;
console.log("Item was found: ", find(findvalue, findvalueArr));
console.log("Item was found: ", find(notFoundValue, findvalueArr));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.toLowerCase().startsWith(letter.toLowerCase());
}

const letterString = "Prime is the best school";
const letter = "Prime";
console.log(" letter was found", isFirstLetter(letter, letterString));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  // TODO: loop to add items
  return sum;
  // TODO: return the sum
}

const sumAllValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("the sum of all numbers in an array: ", sumAll(sumAllValues));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {
  const postiveArr = [4, 5, 6, 7, 8];
  let takePositive = [];
  let emptyArray = [];

  for (let index = 0; index < postiveArr.length; index++) {
    if (postiveArr.length > 0) {
      takePositive.push(postiveArr);
      return takePositive;
    } else {
      emptyArray.push(postiveArr);
    }
  }
}

console.log(
  "return a new array of all positive (greater than zero)",
  allPositive()
);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
