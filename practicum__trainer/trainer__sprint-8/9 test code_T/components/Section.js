

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.append(element);
  };

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

}



/**
 * 
export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
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

 */