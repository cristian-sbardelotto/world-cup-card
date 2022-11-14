let isIgnite = true
const card = document.querySelector('.card');

card.addEventListener('click', () => {
  const cardImage = isIgnite ? 'explorer' : 'ignite'
  isIgnite = !isIgnite;
  card.style.backgroundImage = `url(./assets/${cardImage}-card.svg`;
});