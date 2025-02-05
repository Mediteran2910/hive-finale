const burgerIcon = document.getElementById("burger-icon");
const mobileMenu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("burger-close-icon");

burgerIcon.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  mobileMenu.classList.remove("swing-out-top-bck");
  mobileMenu.classList.add("swing-in-top-fwd");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("swing-in-top-fwd");
  mobileMenu.classList.add("swing-out-top-bck");
  setTimeout(() => (mobileMenu.style.display = "none"), 250);
});
