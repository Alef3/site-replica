

var navbar = document.getElementById("navbar");

function toggleResponsividade() {
  


  if (navbar.className === "links") {
    navbar.className += " responsive";
  } else {
    navbar.className = "links";
  }
}