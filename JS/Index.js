var menu = document.querySelector('.nav-pages');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var iconBars = document.querySelector('.icon-bars');
var iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);

function displayMenu() {
    if( menu.classList.contains('show')) { 
        menu.classList.remove('show');
        iconBars.style.display='inline';
        iconClose.style.display='none';
    }else {
        menu.classList.add('show');
        iconBars.style.display='none';
        iconClose.style.display='inline';
    }
}