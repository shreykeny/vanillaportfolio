let navElements = document.querySelectorAll("a.nav-bar-elements");
let titleColor = document.querySelectorAll(".title a");
let images = document.querySelectorAll(".contact img");

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("mouseover", function() {
    navElements[i].style.fontSize = "30px";
    navElements[i].style.color = "black";
  });

  navElements[i].addEventListener("mouseout", function() {
    navElements[i].style.fontSize = "inherit";
    navElements[i].style.color = "inherit";
  });
}

for (let j = 0; j < titleColor.length; j++) {
  titleColor[j].addEventListener("mouseover", function() {
    titleColor[j].style.color = "blue";
  });
  titleColor[j].addEventListener("mouseout", function() {
    titleColor[j].style.color = "magenta";
  });
}

for (let k = 0; k < images.length; k++) {
  images[k].addEventListener("mouseover", function() {
    images[k].style.height = "70px";
    images[k].style.width = "70px";
  });

  images[k].addEventListener("mouseout", function() {
    images[k].style.height = "inherit";
    images[k].style.width = "inherit";
  });
}
