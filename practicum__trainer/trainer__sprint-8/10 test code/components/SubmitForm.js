export default class SubmitForm {
  constructor({ selector, handleFormSubmit }) {
    this._selector = selector;
    this._handleFormSubmit = handleFormSubmit;
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

      // добавим вызов функции _handleFormSubmit
      // передадим ей объект — результат работы _getInputValues
      this._handleFormSubmit(this._getInputValues());

      // и сбросим её поля
      this._element.reset();
    })
  }

  _getInputValues() {
    // достаём все элементы полей
    this._inputList = this._element.querySelectorAll('.form__input');

    //  создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  generate() {
    this._element = this._getElement();
    this._setEvenListeners(); // добавим обработчики

    return this._element; // возвращаем наружу
  }

}