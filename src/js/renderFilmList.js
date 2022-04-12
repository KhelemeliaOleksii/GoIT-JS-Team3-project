import filmCardTemplate from '../templates/card.hbs';

export function renderListCard(data) {
  const listElement = document.querySelector('.js-card');
  listElement.innerHTML = filmCardTemplate({ ...data });
}
