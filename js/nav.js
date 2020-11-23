const togglebtn = document.querySelector('.navbar-togglebtn');
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');
const navbar_width = document.getElementById('navbar');
const unique = document.getElementById('unique');

togglebtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    unique.classList.toggle('onclick_unique');
  });