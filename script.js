'use strict';

// add event

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i= 0; i< elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }
    else {
        elem.addEventListener(type, callback);
    }
};


// Navbar */


const navbar = document.querySelector("[data-navbar]");
const navToggler  = document.querySelectorAll("[data-nav-toggler]");
const overaly = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overaly.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



// Close navbar//

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
    navbar.classList.remove("active");
    overaly.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);


const header = document.querySelector("[data-header]");

const headerActive = function () {
    window.scrollY > 100 ? header.classList.add("active")
       : header.classList.remove("active");
    }


addEventOnElem(window, "scroll", headerActive);



// accordion //

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active");}

addEventOnElem(accordionAction, "click", toggleAccordion);