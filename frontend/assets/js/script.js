'use strict'

const menuOpen = document.getElementById("menu-open");
const navbar = document.getElementById("navbar");
const danhSach = document.getElementById("danh-sach");
const hotComicList = document.getElementById("hot-comic-list");

menuOpen.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

danhSach.addEventListener("click", () => {
    danhSach.classList.toggle("active");
    hotComicList.classList.toggle("active");
})


/**
* scroll top
*/

const scrollTop = document.querySelector("[data-scroll-top]");

document.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        scrollTop.classList.add("active");
        return;
    }

    scrollTop.classList.remove("active");
});