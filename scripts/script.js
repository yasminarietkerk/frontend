// JavaScript Document
var button = document.querySelector("nav button");
var vrachtwagen = document.querySelector("section:first-of-type h2");

function toonMenu(event) {
    console.log(event);
    deNav = event.target.parentNode;
    document.body.classList.toggle("toonMenu");
}

function toeteren() {
    var vrachtwagenGeluid = document.querySelector("audio");
    vrachtwagenGeluid.play();

}

button.addEventListener("click", toonMenu);
vrachtwagen.addEventListener("click", toeteren);