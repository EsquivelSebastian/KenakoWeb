let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.querySelectorAll('#toggle_close');
let btnSwitch = document.getElementById('switch');
let lightTheme = document.getElementById('wrapper');
let head = document.getElementById('headerid');
let img = document.getElementById('pic')


toggle_open.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    toggle_open.style.display = 'none';
    toggle_close.style.display = 'block';
  }
  else {
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';
  } 
}

btnSwitch.addEventListener('click', () =>{
    btnSwitch.classList.toggle('btnActive');
    lightTheme.classList.toggle('lightTheme');
    head.classList.toggle('lightThemeNavBar');
    img.classList.toggle('aboutLight')
  })