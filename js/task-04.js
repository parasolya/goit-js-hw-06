const buttonEL = document.querySelectorAll('button');
const spanEL = document.querySelector('span');

let counterValue = 0;

buttonEL[0].addEventListener("click", () => {
    counterValue -= 1;
    spanEL.textContent = counterValue}
    );

buttonEL[1].addEventListener("click", () => {
    counterValue += 1;
    spanEL.textContent = counterValue}
    );