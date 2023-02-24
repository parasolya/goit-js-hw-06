function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');


const numberInInput =(event) => {
  console.log(event.currentTarget.value);
};

inputEl.addEventListener('input', numberInInput);