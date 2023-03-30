export default class SubmitForm {
  constructor({ selector }) {
    this._selector = selector;
  }

  _getElement() {
    const formElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.form')
      .cloneNode(true);

    return formElement;
  }

  _setEvenListeners() {
    // при сабмте формы
    this._element.addEventListener('submit', (evt) => {
      // отменим стандратное поведение
      evt.preventDefault();

      // и сбросим её поля
      this._element.reset();
    })
  }

  generate() {
    this._element = this._getElement();
    this._setEvenListeners(); // добавим обработчики

    return this._element; // возвращаем наружу
  }

}