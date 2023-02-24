function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

const changeColor = () => {  
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  textEl.textContent = color;
};

btnEl.addEventListener("click", changeColor);

