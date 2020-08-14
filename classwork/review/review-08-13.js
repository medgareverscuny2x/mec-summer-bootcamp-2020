/**
 * Without using the native “Array.prototype.reduce” method of
 *  JavaScript, compose a function titled “myReduce” that will
 * take in an array of elements and execute a callback function
 * (provided by you) on each of those elements.
 */

// function that takes in an array and a callback [and optionally a starting value]
//

const numsToReduce = [1, 2, 3, 4];

const mySumReducer = (accumulator, current) => accumulator + current;
const myMultiplier = (accumulator, current) => accumulator * current;

const myReduce = (array, callback, initialValue) => {
  let result;
  let startingIndex;

  if (initialValue === undefined) {
    result = array[0];
    startingIndex = 1;
  } else {
    result = initialValue;
    startingIndex = 0;
  }

  // iterate over the array
  for (let i = startingIndex; i < array.length; i++) {
    result = callback(result, array[i]);
  }

  return result;

  // track a value
  // invoke the callback on each element of the array
  // combine/save it with the tracked value
};

console.log(myReduce(numsToReduce, mySumReducer));
console.log(myReduce(numsToReduce, mySumReducer, 1));

// console.log(myReduce(numsToReduce, myMultiplier));

const myArray = [1, 4, 9, 16];

const newArray = myArray.map();

//
function multiply(x) {
  return x * 2;
}

const multiply = (x) => {
  return x * 2;
};

const multiply = (x) => x * 2;
