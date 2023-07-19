const categoryEl = document.getElementById('categories').children.length;

console.log(`Number of categories: ${categoryEl}`);

const items = [...document.querySelectorAll('.item')];
items.forEach((element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}
Elements: ${itemsLength}`);
});

