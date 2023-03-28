import Section from "../components/Section.js";
import UserCard from '../components/UserCard.js';
import DefaultCard from '../components/DefaultCard.js';

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
