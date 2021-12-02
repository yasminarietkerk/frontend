// JavaScript Document
var button = document.querySelector("nav button");

function toonMenu(event) {
    console.log(event);
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu");
}

var Button = document.querySelector("nav button");
button.addEventListener("click", toonMenu);