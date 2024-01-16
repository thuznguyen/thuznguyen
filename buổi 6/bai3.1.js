var colorButton = document.getElementById("colorButton");
var body = document.body;

colorButton.addEventListener("click", function() {
  body.classList.toggle("blue");
});