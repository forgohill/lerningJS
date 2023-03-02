
// параметры передаются как объект
const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: 'popup__input_type_error',
  buttonSelector: '.popup__submit',
  buttonDisabledClass: 'popup__submit_disabled',
}

// функция отключение event по умолчнию
function diableSubmit (evt) {
  evt.preventDefault();
  }

// функция применение валидлации
function enableValidation (config) {
  // выбор одной кнопки SUBMIT
  const form = document.querySelector(config.formSelector);

  // слушатель кнопки сабмит
  // отключение event по умолчнию
  form.addEventListener('submit', diableSubmit);

  // запускаем акнивность кнопки в слуаштеле инпута
  form.addEventListener('input', () => {
  toggleButton(form, config);
  });


  addInputListeners(form, config);
  toggleButton(form, config);
}

// функция переключаем состояние инпута
/**
 * Обработка ввода в input
 * @param {*} evt событие 'input'
 * @param {*} config конфиг 
 */
function handleFormInput (evt, config) {
  
  // находим слашаемый инпут
  const input = evt.target;
  // присваиваем ID инпута к переменноой
  const inputId = input.id;
  // через ID находим конкретный SPAN
  const errorElement = document.querySelector(`#${inputId}-error`);

  // console.log(errorElement);
  // проверка на валидность инпута
  if (input.validity.valid) {
    // если ДА - уберем класс из парматров
    input.classList.remove(config.errorClass);
    // если ДА - обнулим(пустая строка) стандартное сообщение браузера
    // которое хранится в свойстве инпута
    errorElement.textContent='';
  } else {
    // если НЕТ - добавим класс из парматров
    input.classList.add(config.errorClass);
    // если НЕТ - добавим стандартное сообщение браузера
    // которое хранится в свойстве инпута
    errorElement.textContent = input.validationMessage;
  }
}

// блокируем и разблокируем кнопку
function toggleButton (form, config) {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();
  console.log(isFormValid);
  console.log(buttonSubmit);

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid);
}

// функция добавление сообщения об ошибке
function addInputListeners(form, config) {
  
  // node коллекция попап__инпут
  // превращенная в массив
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  // слушатель на каждый инпут 
  // добавляем через форЕач
  inputList.forEach(item => {
    item.addEventListener('input', (evt)=>{
      handleFormInput(evt, config);
    });
  });
}

enableValidation(formValidationConfig);