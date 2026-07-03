const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.onclick = () => {
    navMenu.classList.toggle("active");
};