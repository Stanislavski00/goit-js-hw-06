function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColor = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  backgroundColor.textContent = randomColor;
});

console.log(backgroundColor);

