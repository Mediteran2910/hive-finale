const likeBtns = document.querySelectorAll(".like-btn");

const likeNotification = (card) => {
  const notification = document.createElement("p");
  notification.textContent = "Added to the Likes list! 🎉";
  notification.classList.add("like-notification");
  card.appendChild(notification);
  setTimeout(() => notification.remove(), 4000);
};

const dislikeNotification = (card) => {
  const notification = document.createElement("p");
  notification.textContent = "Removed from the Likes list! 🥺 ";
  notification.classList.add("dislike-notification");
  card.appendChild(notification);
  setTimeout(() => notification.remove(), 4000);
};

likeBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const svg = btn.querySelector("svg");
    if (svg) {
      const path = svg.querySelector("path");
      if (path) {
        const isFilled = path.getAttribute("fill") === "#f48c06";

        path.setAttribute("fill", isFilled ? "none" : "#f48c06");

        if (isFilled) {
          btn.classList.remove("jello-horizontal");
          btn.classList.add("shake-lr");
        } else {
          btn.classList.remove("shake-lr");
          btn.classList.add("jello-horizontal");
        }
      }
    }
  });
});

// TOGGLE FUNCTIONALITY

const sunSvg = document.getElementById("sun-svg");
const moonSvg = document.getElementById("moon-svg");
const sunBtn = document.getElementById("sun-icon");
const moonBtn = document.getElementById("moon-icon");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  sunBtn.classList.add("inactive-mode");
  moonBtn.classList.remove("inactive-mode");
  moonBtn.classList.add("active-mode");
} else {
  document.body.classList.remove("dark-mode");
  moonBtn.classList.add("inactive-mode");
  sunBtn.classList.remove("inactive-mode");
  sunBtn.classList.add("active-mode");
}

const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

sunBtn?.addEventListener("click", () => {
  moonBtn.classList.add("inactive-mode");
  sunBtn.classList.remove("inactive-mode");
  sunBtn.classList.add("active-mode");
  toggleTheme();
});

moonBtn?.addEventListener("click", () => {
  sunBtn.classList.add("inactive-mode");
  moonBtn.classList.remove("inactive-mode");
  moonBtn.classList.add("active-mode");
  toggleTheme();
});
