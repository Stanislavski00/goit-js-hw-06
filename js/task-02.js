const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const jsUlEl = document.createElement('ul');

ingredients.forEach((ingredient) => {
  const jsLiEl = document.createElement('li');
  jsLiEl.textContent = ingredient;
  jsLiEl.classList.add('item');
  jsUlEl.appendChild(jsLiEl);
});

document.getElementById('ingredients').appendChild(jsUlEl);
