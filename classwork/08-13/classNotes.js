const sum = (num1, num2) => {
  return num1, num2;
};

console.log(sum(2, 3));

console.log(sum(2, 3, 5));

const sumAll = (...nums) => {
  let result = 0;
  console.log(nums);
  for (let num of nums) {
    result += num;
  }

  return result;
};

console.log(sumAll(2, 3, 5));

//

const fruits = ["apple", "banana", "mango"];
const vegetables = ["tomato", "squash"];

const favoriteFoods = [...fruits, "pizza", vegetables];

favoriteFoods;
console.log(favoriteFoods[0]);

const spreadSum = (x, y, z) => x + y + z;

const myValues = [2, 3, 6];

console.log(spreadSum(...myValues));

console.log(typeof myValues);

console.log(Array.isArray(spreadSum));
console.log(Array.isArray(myValues));
console.log(Array.isArray(myValues[0]));

//

document.body.style.backgroundColor = "tomato";
// "tomato"
const h1 = document.getElementsByTagName("h1")[0];
//undefined
h1.style.fontFamily = "Helvetica, Arial, sans-serif";
// "Helvetica, Arial, sans-serif"
const divList = document.getElementsByTagName("div");
// undefined
const divArr = [...divList];
divArr.forEach((div) => (div.style.backgroundColor = "teal"));
// undefined
