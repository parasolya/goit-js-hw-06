const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayAdd = (elements) => {
  return elements.map(element => {   
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = element;
    return liEl;
  });
};

const array = arrayAdd(ingredients);
const ulEl = document.querySelector('ul#ingredients');
ulEl.append(...array);

