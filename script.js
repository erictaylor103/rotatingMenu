const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

//1.add click event listener to the 'open' button
//2.add the container.show-nav css class to the container div
open.addEventListener('click', () => {    
    container.classList.add('show-nav');
});

close.addEventListener('click', () => {    
    container.classList.remove('show-nav');
});

