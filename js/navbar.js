

var navbar = document.getElementById("navbar");
var changeNavColor = document.getElementById("change-nav-color");
var clicked =document.getElementById("clicked");

var colorNavbarBefore=navbar.style.color;

var clickedBefore = clicked.style.color;

function toggleResponsividade() {
  


  if (navbar.className === "links") {
    navbar.className += " responsive";
    clicked.style.backgroundColor ="#1a008b36";

  } else {
    navbar.className = "links";
    clicked.style.backgroundColor = clickedBefore;
  }
}