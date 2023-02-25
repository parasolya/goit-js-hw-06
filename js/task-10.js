function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

inputEl.addEventListener('input', () => {
  btnCreateEl.addEventListener('click', (event) => {
    destroyBoxes();
    createBoxes(inputEl.value)
  })
});

btnDestroyEl.addEventListener('click', () => {
  destroyBoxes();
});

const createBoxes = (amount) => {  
  let h = 30;
  let w = 30;
  for (let index = 0; index < amount; index++) {
    h = h + 10;
    w = w + 10;
    console.log(w);
    console.log(h);
    boxEl.insertAdjacentHTML("beforeend", `<div style = "width: ${w}px; height: ${h}px; background: ${getRandomHexColor()}"></div>`);
  };
};
const destroyBoxes = () => boxEl.innerHTML = "";
