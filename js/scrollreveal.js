revelar = document.getElementById("apresentacaoid");
revelar.style.opacity = 0;
  


var myScrollFunc = function () {
  var y = window.scrollY;
  if (y > "3px") {
      revelar.style.opacity = 1;
  } else {
      revelar.style.opacity = 1;
  }
};

window.addEventListener("scroll", myScrollFunc);