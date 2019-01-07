//  menu button

const menuBtn = document.querySelector(".menu-btn");
const menuBar = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", togle);

let menuStatus = false;

function togle() {
  if (!menuStatus) {
    menuBtn.classList.add("open");
    menuBar.classList.add("show");
    menuItems.forEach(item => {
      item.classList.add("show");
    });
    menuStatus = true;
  } else {
    menuBtn.classList.remove("open");
    menuBar.classList.remove("show");
    menuItems.forEach(item => {
      item.classList.remove("show");
    });
    menuStatus = false;
  }
}

// Preloader
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("preloader-hidden");
});
