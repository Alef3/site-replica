

var navbar = document.getElementById("navbar");
var changeNavColor = document.getElementById("change-nav-color");
var clicked =document.getElementById("clicked");

var colorNavbarBefore=navbar.style.color;

var clickedBefore = clicked.style.color;

function toggleResponsividade() {
  
  if (navbar.className === "links") {
    navbar.className += " responsive";
    //clicked.style.backgroundColor ="#1a008b36";
    clicked.style.backgroundColor ="#c3c3ff";
    navbar.style.transition = "all 0.3s ease-in";
  } else {
    navbar.className = "links";
    navbar.style.transition = "all 0.3s ease-out";
    //clicked.style.backgroundColor = clickedBefore;
    

  }
}