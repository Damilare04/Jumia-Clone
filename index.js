const navItem = document.querySelectorAll('.nav-item');
const sub1 = document.querySelector('.sub1');
const sub2 = document.querySelector('.sub2');
const accounts = document.querySelector('#account');
const help = document.querySelector('#help');

// carousel

const buttons = document.querySelectorAll('[data-carousel-button]')

// Categoroy1

const cat1Item = document.querySelectorAll('.item-cat1')
const leftButton = document.querySelector('.cat1-left')
const rightButton = document.querySelector('.cat1-right')

// Category2

const cat2Right = document.querySelector('.cat2-right')
const cat2Left = document.querySelector('.cat2-left')
const cat2Item = document.querySelectorAll('.cat2-item')

// Category 3

const cat3Right = document.querySelector('.cat3-Bright')
const cat3Left = document.querySelector('.cat3-Bleft')
const cat3Item = document.querySelectorAll('.cat3-item')

// PopUp

const popClose = document.querySelector('.pop-close')
const popUp = document.querySelector('.fixed-pop')

// Hamburger

const nav1Ham = document.querySelector('.nav1-ham');
const Hamburger = document.querySelector('.hamburger');
const closeHam = document.querySelector('.close-ham')

accounts.addEventListener('click', () => {
    sub2.classList.remove('show')
    sub1.classList.toggle('show')
    help.classList.remove('active')
    accounts.classList.toggle('active')
})

help.addEventListener('click', () => {
    sub1.classList.remove('show')
    sub2.classList.toggle('show')
    accounts.classList.remove('active')
    help.classList.toggle('active')
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})



rightButton.addEventListener("click", () => {
    for (let i = 0; i < cat1Item.length; i++) {
        cat1Item[i].classList.add('shift')
    }
})

leftButton.addEventListener("click", () => {
    for (let i = 0; i < cat1Item.length; i++) {
        cat1Item[i].classList.remove('shift')
    }
})

cat2Right.addEventListener("click", () => {
    cat2Left.classList.add('show')
    for (let i = 0; i < cat2Item.length; i++) {
        cat2Item[i].classList.add('shift2')
    };  
})

cat2Left.addEventListener("click", () => {
    cat2Left.classList.remove('show')
    for (let i = 0; i < cat2Item.length; i++) {
        cat2Item[i].classList.remove('shift2')
    };
})

cat3Right.addEventListener("click", () => {
    cat3Left.classList.add('show')
    for (let i = 0; i < cat3Item.length; i++) {
        cat3Item[i].classList.add('shift2')
    };  
})

cat3Left.addEventListener("click", () => {
    cat3Left.classList.remove('show')
    for (let i = 0; i < cat3Item.length; i++) {
        cat3Item[i].classList.remove('shift2')
    };
})



var countDownDate = new Date("nov 30, 2022 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

popClose.addEventListener("click", () => {
    popUp.classList.add('hide')
})

nav1Ham.addEventListener("click", () => {
    Hamburger.classList.add('move')
})

closeHam.addEventListener("click", () => {
    Hamburger.classList.remove('move')
})