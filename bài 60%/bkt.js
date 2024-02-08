document.addEventListener("click", function(event) {
  var dropdown = document.getElementById("myDropdown");
  var dropdown = document.getElementById("myDropdown");
  if (event.target.closest(".dropdown")) {
    dropdown.classList.toggle("no-show");
  } else {
    dropdown.classList.add("no-show");
  }
});
function toggleDropdown(event) {
  var dropdown = document.getElementById("search-form");
  dropdown.classList.toggle("show");
}
  
document.addEventListener("click", function(event) {
  var dropdown = document.getElementById("search-form");
  var searchIcon = document.getElementById("search");

  if (!event.target.closest("#search-form") && !event.target.closest("#search")) {
    dropdown.classList.remove("show");
  }
});
  
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("menu").style.padding = "0px 10px";
    document.getElementById("logo").style.fontSize = "18px";
  } else {
    document.getElementById("menu").style.padding = "0px 10px";
    document.getElementById("logo").style.fontSize = "22px";
  }
}
// sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

  // LIÊN HỆ
function validateForm(){
  var x;
  x=document.forms["frm_dk"]["txt_ho"].value;
  if(x==""){
      alert("Xin mời bạn nhập họ :)))");
      return false;
  }
  x=document.getElementById("txt_ten").value;
  if(x==""){
      alert("Xin mời bạn nhập tên :)))");
      return false;
  }
  x=document.getElementById("txt_dienthoai").value;
  if(isNaN(x) || x.length==0 || x.length>10){
      alert("Điện thoại không hợp lệ, xin mời nhập lại!!");
      return false;
  }
}
// hiệu ứng chữ chạy
const typewriterSpan = document.querySelector(".typewrite");
const textArray = JSON.parse(typewriterSpan.getAttribute("data-type"));
const period = parseInt(typewriterSpan.getAttribute("data-period"), 10);
let index = 0;
let isDeleting = false;
let text = "";
function type() {
  const currentText = textArray[index];
  if (isDeleting) {
    text = currentText.substring(0, text.length - 1);
  } else {
    text = currentText.substring(0, text.length + 1);
  }
typewriterSpan.textContent = text;
  if (!isDeleting && text === currentText) {
    isDeleting = true;
  } else if (isDeleting && text === "") {
    isDeleting = false;
    index++;
    if (index >= textArray.length) {
        index = 0;
    }
  }
  setTimeout(type, isDeleting ? period / 2 : period);
}type();