let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

var typed = new Typed(".text", {
  strings: ["Mobile Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
