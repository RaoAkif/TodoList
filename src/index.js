import './index.css';

import { createList } from "./modules/displayList.js";
import { refresh, enter } from "./Utils/CONSTANTS.js";
import TodoList from "./modules/todoList.js";
import AddTodo from "./modules/addTodo.js";
import EditTodo from "./modules/editTodo.js";
import DeleteTodo from "./modules/deleteTodo.js";

const heading = document.querySelector("#list-title");
const newItem = document.querySelector(".new-item");
const newListItem = document.querySelector(".new-item-input");
const toDoList = document.querySelector(".list");

const toDo = new TodoList();
toDo.checkStorage();

heading.appendChild(refresh);
refresh.addEventListener("click", () => {
  window.location.reload();
});

newItem.appendChild(enter);

createList(toDoList, toDo);
AddTodo(newListItem, toDo);
DeleteTodo(toDo);
EditTodo(toDo);
