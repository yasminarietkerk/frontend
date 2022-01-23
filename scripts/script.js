// JavaScript Document
var button = document.querySelector("nav button");
var vrachtwagen = document.querySelector("section:first-of-type h2");
var btn = document.querySelector(".btn-toggle");
var paarshartje = document.querySelector(".pagina2 section:nth-of-type(1) button");


btn.addEventListener("click", function () {
    (document.body.classList.toggle("dark-theme"))
    document.querySelector(".btn-toggle").textContent = "Lightmode";
});


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
paarshartje.addEventListener("click", favoriet);


function favoriet() {
    var wishlist = document.querySelector("span");
    var huidigeHoeveelheid = parseInt(wishlist.textContent);
    var nieuweHoeveelheid

    if (paarshartje.textContent == "💜") {
        paarshartje.textContent = "💚";
        nieuweHoeveelheid = huidigeHoeveelheid + 1;
    } else {
        paarshartje.textContent = "💜";
        nieuweHoeveelheid = huidigeHoeveelheid - 1;
    }

    wishlist.textContent = nieuweHoeveelheid;
}