let navToggler = document.querySelector('.nav-toggler');
let navLinks = document.querySelector('.nav__links')
navToggler.addEventListener('click',()=>{
    navLinks.classList.toggle("nav__links-active")
})