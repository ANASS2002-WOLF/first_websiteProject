const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu")

hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('active');
    headerMenu.classList.toggle('active')
})


