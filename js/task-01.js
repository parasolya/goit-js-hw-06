const liEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${liEl.length}`);

liEl.forEach(el => { 
    const textEl = el.firstElementChild;   
    const liEl = el.lastElementChild;  
    console.log(`Category: ${textEl.textContent}`);   
    console.log(`Elements: ${liEl.children.length}`);
    });

    
