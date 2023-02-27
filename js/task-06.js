const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", (event) => {  
    inputEl.classList.add('invalid');      
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputEl.classList.replace('invalid', 'valid');
    }    
     
    });
    
    


  