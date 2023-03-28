import { DefaultCard } from './DefaultCard.js'
import { UserCard } from './UserCard.js'

export default class Section {
  constructor({ data }, selector) {
    this._initialArray = data;
    this._container = document.querySelector(selector);
  }
  renderItems() {
    // Переберем массив _initialArray с начальным сообщением
    this._initialArray.forEach((item) => {
      // исходя из поля isOwner создадим экземпляры классов
      const message = item.isOwner
        ? new UserCard(item, '.card-template_type_user')
        : new DefaultCard(item, '.card-template_type_default');

      const cardElement = message.generateCard();

      // Вставим разметку нас траницу,
      // используя метод setItem класса Section
      this.setItem(cardElement);
    });
  }

  setItem(element) {
    this._container.append(element);
  }
}