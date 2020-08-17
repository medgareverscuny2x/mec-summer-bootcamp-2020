const array = [1, 2, 3];

array.map((i) => i * 2);

array.forEach((i) => console.log(i));

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {
//     const todo = response.data;
//     return console.log(todo);
//   })
//   .catch(function (error) {
//     return console.log(error);
//   });

const appendListItemToList = (list, data) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${data.title}`;
  list.appendChild(listItem);
};

const todoList = document.getElementById("todo-list");

// fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

axios
  .get("https://jsonplaceholder.typicode.com/todos?userId=1")
  .then((response) => {
    const data = response.data;
    data.forEach((data) => appendListItemToList(todoList, data));
  })
  .catch((error) => console.log(error));

// when user loads page
// a get request will be sent to grab user 1's todo list items
// a listItem node will be created for each todo in the response
// each listItem node will be appended to the todo-list on the page
