// show menu in mobile function
const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

//hide menu after item is clicked

document.querySelectorAll('.menu-item').forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('show-menu')
  })})

//add shadow to header on scroll

const headerShadow = () => {

  let prevPos = 100;
  let currentPos = scrollY;

  if (currentPos > prevPos) {
    document.querySelector('header').classList.add('shadow')
  } else {
    document.querySelector('header').classList.remove('shadow')
  }
}

window.addEventListener('scroll', headerShadow);