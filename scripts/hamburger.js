const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addeventlistener("click", () => {
  hamburger.classlist.toggle("active");
  navMenu.classlist.toggle("active");
});
