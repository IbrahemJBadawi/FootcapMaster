'use strict';

/*navbar toggle*/
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for(let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

/*HEADER & GO TO TOP*/
const header = document.querySelector("[data-header]");
const goToBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
    if(window.scrollY >= 80){
        header.classList.add("active");
        goToBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        goToBtn.classList.remove("active");
    }
})