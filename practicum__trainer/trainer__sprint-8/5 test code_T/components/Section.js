import DefaultCard from './DefaultCard.js';
import HorizontalCard from './HorizontalCard.js';

export default class Section {
  constructor({ data }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.append(element);
  };

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(isGrid) {
    this.clear();

    this._renderedItems.forEach((item) => {
      const card = isGrid
        ? new DefaultCard(item, '.default-card')
        : new HorizontalCard(item, '.horizontal-card');

      const cardElement = card.generateCard();
      this.setItem(cardElement);
    });
  }

}

