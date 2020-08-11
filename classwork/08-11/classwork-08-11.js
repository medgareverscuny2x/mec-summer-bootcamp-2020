// const myString = "John Doe";
// myString;

// const myTempLiteral = `My name is John.
// I like to code and cook.
// `;
// myTempLiteral;

// let name = "Helga";
// console.log(`Her name is ${name}.`);

// const myName = "Shahid";
// const myAge = 99;
// console.log(myName + myAge);

// console.log(5 + true);

// let fruits = ["apple", "banana", "kiwi", "pineapple"];

// console.log(fruits[2]);

// const [one, two, three, four] = fruits;
// one;
// two;
// three;
// four;

// const grid = [
//   ["a", "b", "c"],
//   ["a", "a", "b"],
//   ["b", "b", "d"],
// ];

// console.log(grid[2][2]);

// const classmates = ["Ben", "Lisa", "Kevin", "Anna", "David"];

// console.log(classmates[3]);

// const words = [
//   ["happy", "salute", "tile"],
//   ["kitchen", "if", "over"],
//   ["gentleman", "drum", "napkin"],
// ];

// console.log(words[2][0]);

// // Objects

// let person = {
//   firstName: "Jon",
//   lastName: "Osterman",
//   age: 42,
//   favoriteColor: "blue",
//   favoriteShows: ["Stranger Things", "Community"],
// };

// console.log(person.firstName);
// console.log(person["lastName"]);
// console.log(person.favoriteShows[1]);
// console.log(person.age);

// person["age"] = 51;
// person;

// person.job = "Scientist";
// console.log(person);

// const foods = {
//   topFoodOne: "pizza",
//   topFoodTwo: "macaroni",
//   topFoodThree: "bagels",
// };

// console.log(
//   `My favorite foods are ${foods.topFoodOne} and ${foods.topFoodTwo} but I also like ${foods.topFoodThree}`
// );

// // Operators
// // plus operator
// console.log(8 + 9);

// console.log("john " + "smith");

// let number = 3;
// number++;
// number;

// let myNum = 2;
// myNum += 7;
// myNum;

// // minus

// console.log(13 - 9);

// let mySub = 12;
// mySub--;
// mySub;

// mySub -= 5;
// mySub;

// // star: multiplication and exponents
// console.log(6 * 2);

// console.log(5 ** 2);

// let myStar = 4;
// myStar *= 3;
// console.log(myStar);

// // slash: division
// console.log(12 / 3);
// console.log(myStar / mySub);

// let mySlash = 54;
// mySlash /= 23;
// console.log(mySlash);

// // remainder/modulo

// console.log(17 % 4);

// const mathOne = 18;
// const mathTwo = 4;
// const mathSum = mathOne + mathTwo;
// const mathProduct = mathOne * mathTwo;
// console.log(mathSum);
// console.log(mathProduct);

// // comparison operators

// let numberComp = 6;

// console.log(numberComp == 10);
// console.log(numberComp == "6");

// console.log(numberComp != 10);
// console.log(numberComp != "6");

// console.log(numberComp === "6");
// console.log(numberComp !== "6");

// console.log(numberComp > 2);
// console.log(numberComp >= 6);

// console.log(numberComp < 1);
// console.log(numberComp <= 5);

// console.log(numberComp > 2 || numberComp < 1);
// console.log(numberComp > 2 && numberComp < 1);
// console.log(numberComp == !"hello");

// // expressions
// console.log(4 + 3);

// console.log(numberComp * 3);

// const city = "Manhattan";
// console.log(city + " is where I live");

// let number = 6;

// // if (number < 2) {
// //   console.log("less than 2");
// // } else if (number > 4) {
// //   console.log("greater than 4");
// // }

// if (number < 4) {
//   console.log("less than four");
// } else if (number > 100) {
//   console.log("greater than one hundred");
// } else {
//   console.log("number is between 4 and 100");
// }

// if (number < 8 && number > 0) {
//   console.log("between 8 and 0");
// }

for (let i = 0; i < 10; i++) {
  console.log("here we go again", i);
}

let nums = [12, 21, 42, -5];
console.log(nums.length);
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

let classroom = { a: "John", b: "Jane", c: "Jose" };

for (let student in classroom) {
  console.log(classroom[student]);
}

let number = 1;

while (number <= 12) {
  console.log("we need a fan");
  number++;
}
