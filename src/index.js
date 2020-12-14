import { landing } from "./modules/landing.js";
import { menu } from "./modules/menu.js";
import { about } from "./modules/about.js";
import { reservations } from "./modules/reservations.js";
import { destroy } from "./modules/destroy.js";
import { fade } from "./modules/fade.js";
import "./main.css";


let logo = document.querySelector(".logo");
let aboutButton = document.querySelector("#about-link");
let menuButton = document.querySelector("#menu-link");
let contactButton = document.querySelector("#contact-link");

window.onscroll = function () {
    stickyNav();
};

let stickyNav = () => {
    let navbar = document.querySelector(".navbar");
    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        document.body.style.paddingTop = sticky + 'px';
        navbar.classList.add("sticky");
    } else {
        document.body.style.paddingTop = 0;
        navbar.classList.remove("sticky");
    }
};

let setRemoveActive = (button) => {
    aboutButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    button.classList.add("active");
};

aboutButton.addEventListener("click", (e) => {
    fade();
    setTimeout(destroy, 700);
    setTimeout(about, 700);
    setTimeout(fade, 700);
    setRemoveActive(e.target);
});

menuButton.addEventListener("click", (e) => {
    fade();
    setTimeout(destroy, 700);
    setTimeout(menu, 700);
    setTimeout(fade, 700);
    setRemoveActive(e.target);
});

contactButton.addEventListener("click", (e) => {
    fade();
    setTimeout(destroy, 700);
    setTimeout(reservations, 700);
    setTimeout(fade, 700);
    setRemoveActive(e.target);
});

logo.addEventListener("click", (e) => {
    setTimeout(destroy, 700);
    setTimeout(landing, 700);
    setTimeout(fade, 700);
    setRemoveActive(e);
});

landing();
