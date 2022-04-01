import Todo from './Todo.js';

export default function AddTodo(newListItem, todos) {
  newListItem.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && newListItem.value) {
      const todoItem = new Todo(newListItem.value, false, todos.list.length);
      todos.add(todoItem);
      todos.store();
    }
  });
}
