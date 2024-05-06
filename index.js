const navMenu = document.getElementById('menu');
const navToggle = document.getElementById('menu-icon');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('open')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('open')
    })
}