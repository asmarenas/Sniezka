//  menu button

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", togle);

let menuStatus = false;

function togle() {
  if (!menuStatus) {
    menuBtn.classList.add("open");
    menuStatus = true;
  } else {
    menuBtn.classList.remove("open");
    menuStatus = false;
  }
}
