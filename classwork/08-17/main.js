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
  if (data.completed === true) listItem.classList.add("completed");
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
    return data;
  })
  .then((todo) => {
    todo.forEach((todo) => appendListItemToList(todoList, todo));
  })
  .catch((error) => console.log(error));

// when user loads page
// a get request will be sent to grab user 1's todo list items
// a listItem node will be created for each todo in the response
// each listItem node will be appended to the todo-list on the page

// console.log("One");
// setTimeout(() => console.log("Two"), 10);
// console.log("Three");

// let result;
// setTimeout(() => {
//   result = "hello";
// }, 0);
// console.log(result);

// const result = setTimeout(() => {
//   return "hello";
// }, 0);
// console.log(result);

// setTimeout(function cb() {
//   const result = "hello";
//   console.log(result);
// }, 0);

// axios.get("https://jsonplaceholder.typicode.com/todos?userId=1").then(
//   function onSuccess(data) {
//     console.log(data);
//   },
//   function onError(err) {
//     console.log(err);
//   }
// );

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");

const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  //   grab the input value
  let inputValue = todoInput.value;
  //   send a POST request to API
  // onSuccess: append the data to the list
  // clear the input value
  appendListItemToList(todoList, { title: inputValue });
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: inputValue,
      userId: 1,
    })
    .then((response) => response.data)
    .then((todo) => {
      console.log(todo);
      //   appendListItemToList(todoList, todo);
    })
    .catch((err) => console.log(err));
  inputValue = "";
};

todoForm.addEventListener("submit", handleFormSubmit);
