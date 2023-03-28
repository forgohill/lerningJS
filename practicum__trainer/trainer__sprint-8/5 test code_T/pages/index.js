import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector
} from '../utils/constants.js';
// import { renderElements } from '../utils/utils.js';

import Section from '../components/Section.js';
import { items } from '../utils/constants.js';

const defaultCardList = new Section({ data: items }, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(true);
});

horizontalCardButton.addEventListener('click', () => {
  defaultCardList.renderItems(false);
});

defaultCardList.renderItems();