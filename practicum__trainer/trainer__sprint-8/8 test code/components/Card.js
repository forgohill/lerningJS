
export class Card {
  constructor(templateSelector) {
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector('.card__text')
      .addEventListener('click', () => {
        this._handleMessageClick();
      });
  }

  _handleMessageClick() {
    this._element
      .querySelector('.card__text')
      .classList
      .toggle('card__text_is-active');
  }
}