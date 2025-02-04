const couponBtn = document.getElementById("coupon-btn");
const eventBtn = document.getElementById("event-btn");
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
});

eventBtn.addEventListener("click", () => {
  eventBtn.classList.add("active-filter-button");
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
    pageExit(searchPage);
  });
});

dateHomeBtn.addEventListener("click", () => {
  pageEntrance(dateSelectPage);
});

closeDateIcon.addEventListener("click", () => {
  pageExit(dateSelectPage);
});

todayFilterBtn.addEventListener("click", () => {
  dateBtnText.textContent = todayFilterBtn.textContent;
  pageExit(dateSelectPage);
});

weekFilterBtn.addEventListener("click", () => {
  dateBtnText.textContent = weekFilterBtn.textContent;
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
