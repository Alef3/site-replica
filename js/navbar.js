

var navbar = document.getElementById("navbar");
var changeNavColor = document.getElementById("change-nav-color");
var clicked =document.getElementById("clicked");



function toggleResponsividade() {
  
  if (navbar.className === "links") {
    navbar.style.height = "325px";
    navbar.className += " responsive";
    navbar.style.transition =  "all 0.4s";
    //navbar.style.transition =  "height 1.5s";
  }
  
  else {
    navbar.style.transition =  "height 0.4s";
    navbar.style.height = "30px";
    navbar.className = "links";
  }

}


