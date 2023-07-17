const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const jsUlEl = document.createElement("ul");

const jsLiEls = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join('');

console.log(jsUlEl);
document.body.insertAdjacentHTML('beforeend', `<ul>${jsLiEls}</ul>`);
