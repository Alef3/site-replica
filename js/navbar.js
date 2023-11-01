function toggleResponsividade() {

  var navbar = document.getElementById("navbar");
  if (navbar.className === "links") {
    navbar.className += " responsive w3-animate-top";
  } else {
    navbar.className = "links";
  }

}