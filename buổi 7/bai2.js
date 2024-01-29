// thanh điều hướng menu đa cấp

// Lấy danh sách các menu chứa menu con
var parentMenus = document.querySelectorAll("#menu > ul > li");
// Lặp qua danh sách menu chứa menu con và gắn sự kiện click chuột
parentMenus.forEach(function(menu) {
  menu.addEventListener("click", function() {
    // Kiểm tra nếu menu con đã hiển thị thì ẩn đi, ngược lại hiển thị
    var subMenu = this.querySelector("ul");
    if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
    } else {
      subMenu.style.display = "block";
    }
  });
});
// kéo chuột
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
