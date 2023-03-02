
// параметры передаются как объект
const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: 'popup__input_type_error',

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
  form.addEventListener('submit', diableSubmit)


  addInputListeners(form, config);
  // console.log(form);
}

// функция переключаем состояние инпута
function handleFormInput (evt, config) {
  
  const input = evt.target;
  
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  // console.log(errorElement);
  // проверка на валидность инпута
  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent='';
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
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