import { moreDots } from '../Utils/CONSTANTS.js'

function display(index, todos) {
  return `
    <input class='checkbox' type='checkbox' name='checkbox'>
    <label class="task" for='checkbox'>${todos.list[index].description}</label>
    <img class='dots' src=${moreDots.src}>
  `;
}

export function createList(element, todos) {
  for (let i = 0; i < todos.list.length; i += 1) {
    const newElement = document.createElement('li');
    newElement.className = 'list-item';
    newElement.innerHTML = display(i, todos);
    element.appendChild(newElement);
  }
}

export default createList;
