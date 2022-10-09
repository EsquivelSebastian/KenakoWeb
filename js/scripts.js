let menu = document.getElementById('menu');
let menuColor = document.getElementById('menu');
let menuBars = document.getElementById('menuBars');
let menuHold = document.querySelector("#nav");


menuBars.addEventListener('click', toggleMenu);
function toggleMenu(){
    menu.classList.toggle('show-menu');
}

window.addEventListener('scroll', function(){
    menuHold.classList.toggle('active', this.window.scrollY > 0)
})

let punto = window.addEventListener('scroll',function(){
    this.window.screenY
})
