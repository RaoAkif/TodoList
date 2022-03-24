import './index.css';
import items from './modules/data.js';

const listItem = document.querySelector('#task-list');

window.onload = () => {
  items.forEach((item) => {
    listItem.innerHTML += `
      <li class='item' id='item-${item.index}'>
        <div id='item-check'>
            <input type='checkbox' id='item-check' name='item' value='item'>
            <div class='item-spec'>
                <div class='item-desc'>
                ${item.description}
                </div>
            </div>
        </div>
        <div class='item-completed'>
          <i class='fa-solid fa-ellipsis-vertical'></i>
          <i class='fa-solid fa-trash-can'></i>
        </div>
      </li>
    `;
  });
};
