const couponBtn = document.getElementById("coupon-btn");
const eventBtn = document.getElementById("event-btn");
const allBtn = document.getElementById("all-btn");
const locationHomeBtn = document.getElementById("location-btn");
const searchPage = document.querySelector(".search-by-location");
const closeSearchBtn = document.getElementById("close-search-icon");
const cities = document.querySelectorAll("li");
const locationBtnText = document.getElementById("location-btn-text");
const todayFilterBtn = document.getElementById("today-date-btn");
const weekFilterBtn = document.getElementById("week-date-btn");
const dateHomeBtn = document.getElementById("date-btn");
const dateBtnText = document.getElementById("date-btn-text");
const closeDateIcon = document.getElementById("close-date-icon");
const dateSelectPage = document.querySelector(".date-selector");
const likeBtns = document.querySelectorAll(".like-btn");
const cards = document.getElementsByClassName("card");
const burgerIcon = document.getElementById("burger-icon");
const mobileMenu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("burger-close-icon");
const form = document.querySelector("form");
const body = document.body;
const locationFilterImg = document.querySelector("#location-filter-image");
const calendarFilterImg = document.querySelector("#calendar-filter-image");

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
  notification.textContent = "Added to Likes list! 🎉";
  notification.classList.add("like-notification");
  card.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
};

const dislikeNotification = (card) => {
  const notification = document.createElement("p");
  notification.textContent = "Removed from Likes list! 🥺 ";
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

const pageEntrance = (element) => {
  element.style.display = "flex";
  element.classList.remove("scale-out-ver-bottom");
  element.classList.add("scale-in-ver-bottom");
};

const pageExit = (element) => {
  element.classList.remove("scale-in-ver-bottom");
  element.classList.add("scale-out-ver-bottom");

  setTimeout(() => (element.style.display = "none"), 300);
};

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

locationHomeBtn.addEventListener("click", () => {
  pageEntrance(searchPage);
});

closeSearchBtn.addEventListener("click", () => {
  pageExit(searchPage);
});

cities.forEach((city) => {
  city.addEventListener("click", () => {
    locationBtnText.textContent = city.textContent;
    locationBtnText.style.color = "#26262c";
    locationHomeBtn.style.backgroundColor = "#ffd819";
    locationFilterImg.src = "icone/location-icon-filter-black.png";

    pageExit(searchPage);
  });
});

const filterDateStyling = () => {
  dateBtnText.style.color = "#26262c";
  dateHomeBtn.style.backgroundColor = "#ffd819";
  calendarFilterImg.src = "icone/calendar-icon-filter-black.png";
};

dateHomeBtn.addEventListener("click", () => {
  pageEntrance(dateSelectPage);
});

closeDateIcon.addEventListener("click", () => {
  pageExit(dateSelectPage);
});

todayFilterBtn.addEventListener("click", () => {
  dateBtnText.textContent = todayFilterBtn.textContent;
  filterDateStyling();
  pageExit(dateSelectPage);
});

weekFilterBtn.addEventListener("click", () => {
  dateBtnText.textContent = weekFilterBtn.textContent;
  filterDateStyling();
  pageExit(dateSelectPage);
});

document.addEventListener("DOMContentLoaded", function () {
  const singleDateBtn = document.querySelector("#single-day");
  const customPeriodBtn = document.querySelector("#custom-period");
  const flatpickrContainer = document.querySelector(".flatpickr-container");

  const singleDatePicker = flatpickr("#single-date-picker", {
    dateFormat: "Y-m-d",
    minDate: "today",
    appendTo: flatpickrContainer,
    onChange: function (selectedDates, dateStr) {
      dateBtnText.textContent = dateStr;
      dateSelectPage.classList.remove("scale-in-ver-bottom");
      dateSelectPage.classList.add("scale-out-ver-bottom");
      setTimeout(() => (dateSelectPage.style.display = "none"), 300);
    },
  });

  const customPeriodPicker = flatpickr("#custom-period-picker", {
    mode: "range",
    dateFormat: "Y-m-d",
    minDate: "today",
    appendTo: flatpickrContainer,
    onChange: function (selectedDates, dateStr) {
      if (selectedDates.length === 2) {
        customPeriodBtn.textContent = `${dateStr[0]} to ${dateStr[1]}`;
        dateBtnText.textContent = dateStr;
        dateSelectPage.classList.remove("scale-in-ver-bottom");
        dateSelectPage.classList.add("scale-out-ver-bottom");
        setTimeout(() => (dateSelectPage.style.display = "none"), 300);
      }
    },
  });

  singleDateBtn.addEventListener("click", function () {
    singleDatePicker.open();
  });

  customPeriodBtn.addEventListener("click", function () {
    customPeriodPicker.open();
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

// NAV BAR LINKS

const navLinks = document.querySelectorAll(".wider-screen-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => link.classList.add(".active-links"));
});
