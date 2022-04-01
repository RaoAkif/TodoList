export default class TodoList {
  constructor() {
    this.list = [];
  }

  add(item) {
    this.list.push(item);
  }

  remove(index) {
    this.list.splice(index, 1);
  }

  fixIndex() {
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i;
    }
  }

  store() {
    window.localStorage.setItem('list', JSON.stringify(this.list));
  }

  checkStorage() {
    if (window.localStorage.getItem('list')) {
      this.list = JSON.parse(window.localStorage.getItem('list'));
    }
  }
}
