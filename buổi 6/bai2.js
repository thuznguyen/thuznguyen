var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

showSlide(currentSlide);