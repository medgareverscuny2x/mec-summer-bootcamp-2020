// console.log(parseInt("23"));
// console.log(parseFloat("23.74"));

// function add(arg1, arg2) {
//   return arg1 + arg2;
// }
// console.log(add(3, 6));

// const multiply = function (num1, num2) {
//   return num1 * num2;
// };

// console.log(multiply(5, 4));

// const subtract = (num1, num2) => num1 - num2;

// console.log(subtract(5, 2));

// const multiplyByTwo = (num) => {
//   return multiply(2, num);
// };

// console.log(multiplyByTwo(6));

// function callbackExample(arg1, arg2, cb) {
//   return cb(arg1, arg2);
// }

// console.log(callbackExample(2, 3, add));

// function doBoth(num1, num2, firstFunc, secondFunc) {
//   console.log(firstFunc, secondFunc);
//   // pass the result of firstFunc into secondFunc with 5 as the second parameter
//   return secondFunc(firstFunc(num1, num2), 5);
// }

// console.log(
//   doBoth(3, 6, add, function (a, b) {
//     return a / b;
//   })
// );

// function greet() {
//   return "Hello!";
// }

// console.log(greet());

// const sayBye = () => {
//   return "Goodbye!";
// };

// console.log(sayBye());

function runCodeOnFive(callback) {
  const num = 5;
  return callback(num);
}

console.log(runCodeOnFive((n) => n + 6));

// const funcWithinFunc = () => {
//   const logThis = () => {
//     console.log("This is being logged!");
//   };

//   return logThis;
// };

// funcWithinFunc()();

// const makeGreeter = (name) => {
//   return () => `Hello ${name}!`;
// };

// const greetShahid = makeGreeter("Shahid");

// console.log(greetShahid());

// function returnLogFunc() {
//   const name = "Clark";

//   function logName() {
//     console.log(name);
//   }

//   return logName;
// }

// console.log(name);

// const logger = returnLogFunc();

// logger();

const nums = [2, 45, 32, 61, 9, 12];
const fruits = ["apple", "banana", "pineapple", "mango"];

const newNums = [];

nums.forEach((n) => {
  // push onto the end of the newNums array
  newNums.push(n * 5);
});

newNums;
// pop: takes off the end/top of stack
console.log(newNums.pop());
newNums;
// shift takes off the front or the bottom of stack
console.log(newNums.shift());
newNums;
console.log(newNums.unshift(5));
newNums;

const deletedNum = newNums.splice(2);
console.log(deletedNum);
newNums.push(deletedNum[0]);
newNums;

const sentences = fruits.map((fruit) => `I like ${fruit}`);
sentences;

const numsBySix = nums.map((n) => n * 6);
numsBySix;

const evenOrOdd = nums.map((n) => {
  if (n % 2 === 0) {
    return `${n} is even`;
  } else {
    return `${n} is odd`;
  }
});

evenOrOdd;

// array.reduce()
nums;

const reducer = (accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
};

console.log(nums.reduce(reducer, 5));
