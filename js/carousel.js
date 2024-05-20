const carousel = document.querySelector(".carousel");
let counter = 1;

setInterval(() => {
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(-${counter * 100}%)`;

  counter++;

  if (counter === 6) {
    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";
      counter = 1;
    }, 500);
  }
}, 3000);
