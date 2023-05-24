let burger = document.querySelector('.burger')
let rightnav = document.querySelector('.right-nav')
let navlist = document.querySelector('.nav-list')
let navbar = document.querySelector('.navbar')
let logo = document.querySelector('.logo')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

