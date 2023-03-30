// import { DefaultCard } from './DefaultCard.js'
// import { UserCard } from './UserCard.js'


export default class Section {
  constructor({ data, renderer }, selector) {
    this._initialArray = data;
    this._renderer = renderer; // renderer — это функция

    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }

  setItem(element) {
    this._container.append(element);
  }
}