const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener("input", (event) => {    
    spanEl.textContent = "Anonymous";
    if (event.currentTarget.value !== "") {
        spanEl.textContent = event.currentTarget.value.trim()
    };
});
  