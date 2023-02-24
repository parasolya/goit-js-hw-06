const inputEl = document.querySelector('#validation-input');
inputEl.classList.add('invalid'); 

inputEl.addEventListener("blur", (event) => {        
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputEl.classList.replace('invalid', 'valid');
    } else {
            inputEl.classList.replace('valid', 'invalid')
      }    
    });
    
    


  