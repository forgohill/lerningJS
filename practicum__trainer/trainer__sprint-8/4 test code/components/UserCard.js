import { Card } from './Card.js'

export class UserCard extends Card {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._text = data.text;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element
      .querySelector('.card__paragraph')
      .textContent = this._text;

    return this._element;

  };
  _handleMessageClick() {
    super._handleMessageClick();
    this._element.classList.toggle('card_is-active');
  }
}