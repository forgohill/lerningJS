import Section from "../components/Section.js";
import UserCard from '../components/UserCard.js';
import DefaultCard from '../components/DefaultCard.js';
import SubmitForm from '../components/SubmitForm.js';

import { messageList, cardListSection } from '../utils/constants.js';




const cardsList = new Section(
  {
    data: messageList,
    renderer: (messageItem) => { // обратите внимание на парметр messageItem
      const message = messageItem.isOwner
        ? new UserCard(messageItem, '.card-template_type_user')
        : new DefaultCard(messageItem, '.card-template_type_default');

      const cardElement = message.generateCard();

      cardsList.setItem(cardElement);
    },
  },
  cardListSection
);
cardsList.renderItems();

// создаем экземляр формы
const form = new SubmitForm({
  selector: '.form-template',
  handleFormSubmit: (formData) => {

    // при создании экземпляра UserCard передаём
    // ему объект с данными формы
    const message = new UserCard(formData, '.card-template_type_user');

    const messageElement = message.generateCard();

    cardsList.setItem(messageElement);
  }
});

const formElement = form.generate();

// инициализируем, класс ответсвенный
// за добавление формы на страницу
const formRenderer = new Section(
  { data: [] }, '.form-section');

formRenderer.setItem(formElement);
