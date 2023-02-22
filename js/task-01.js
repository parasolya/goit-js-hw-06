const ulEl = document.querySelector('ul#categories');
console.log(`Number of categories: ${ulEl.children.length}`);

[...ulEl.children].forEach(el => { 
    const textEl = el.querySelector('h2');   
    const liEl = el.querySelector('ul');  
    console.log(`Category: ${textEl.textContent}`);   
    console.log(`Elements: ${liEl.children.length}`);
    });

    
