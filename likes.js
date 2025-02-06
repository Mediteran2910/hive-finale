const burgerIcon = document.getElementById("burger-icon");
const mobileMenu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("burger-close-icon");
const likeBtns = document.querySelectorAll(".like-btn");
const couponBtn = document.getElementById("coupon-btn");
const eventBtn = document.getElementById("event-btn");
const allBtn = document.getElementById("all-btn");

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

const likeNotification = (card) => {
  const notification = document.createElement("p");
  notification.textContent = "Added to the Likes list! 🎉";
  notification.classList.add("like-notification");
  card.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
};

const dislikeNotification = (card) => {
  const notification = document.createElement("p");
  notification.textContent = "Removed from the Likes list! 🥺 ";
  notification.classList.add("dislike-notification");
  card.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
};

likeBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const svg = btn.querySelector("svg");
    if (svg) {
      const path = svg.querySelector("path");
      if (path) {
        const isFilled = path.getAttribute("fill") === "#f48c06";

        path.setAttribute("fill", isFilled ? "none" : "#f48c06");

        const card = event.target.closest(".card");
        if (card) {
          if (isFilled) {
            dislikeNotification(card);
            btn.classList.remove("jello-horizontal");
            btn.classList.add("shake-lr");
            card.classList.add("rotate-out-diag-1");
            setTimeout(() => {
              card.remove();
            }, 600);
          } else {
            likeNotification(card);
            btn.classList.remove("shake-lr");
            btn.classList.add("jello-horizontal");
          }
        }
      }
    }
  });
});

couponBtn.addEventListener("click", () => {
  couponBtn.classList.add("active-filter-button");
  eventBtn.classList.remove("active-filter-button");
  allBtn.classList.remove("active-filter-button");
});

eventBtn.addEventListener("click", () => {
  eventBtn.classList.add("active-filter-button");
  couponBtn.classList.remove("active-filter-button");
  allBtn.classList.remove("active-filter-button");
});

allBtn.addEventListener("click", () => {
  allBtn.classList.add("active-filter-button");
  eventBtn.classList.remove("active-filter-button");
  couponBtn.classList.remove("active-filter-button");
});
