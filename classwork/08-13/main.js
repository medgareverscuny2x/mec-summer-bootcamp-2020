document.getElementById("click-me").addEventListener("click", (event) => {
  alert("you clicked me!");
});

const fruitList = document.getElementById("fruit-list");

const fruits = Array.from(fruitList.children);

// fruits.forEach((fruit) => {
//   fruit.addEventListener("mouseover", (event) => {
//     fruit.classList.toggle("selected");
//   });
// });

// document.body.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });
