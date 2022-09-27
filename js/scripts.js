let menu = document.getElementById('menu');
let menuBars = document.getElementById('menuBars');

menuBars.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('show-menu');
}
