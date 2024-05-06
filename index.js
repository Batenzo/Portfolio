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


// THEME TOGGLE

var night = document.getElementById('theme-toggle')

night.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        night.className = 'bx bxs-sun';
    }else{
        night.className = 'bx bxs-moon'
    }
}