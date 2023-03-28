import Section from "../components/Section.js";
import { messageList, cardListSection } from '../utils/constants.js';

const cardList = new Section({ data: messageList }, cardListSection);
cardList.renderItems();


// messageList.forEach((item) => {
//   const card = item.isOwner
//     ? new UserCard(item, '.card-template_type_user')
//     : new DefaultCard(item, '.card-template_type_default');
//   const cardElement = card.generateCard();
//   document.body.append(cardElement);
// });



