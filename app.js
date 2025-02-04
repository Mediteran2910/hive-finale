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

couponBtn.addEventListener("click", () => {
  couponBtn.classList.add("active-filter-button");
  eventBtn.classList.remove("active-filter-button");
});

eventBtn.addEventListener("click", () => {
  eventBtn.classList.add("active-filter-button");
  couponBtn.classList.remove("active-filter-button");
});

locationHomeBtn.addEventListener("click", () => {
  searchPage.style.display = "flex";
  searchPage.classList.remove("scale-out-ver-bottom");
  searchPage.classList.add("scale-in-ver-bottom");
});

closeSearchBtn.addEventListener("click", () => {
  searchPage.classList.remove("scale-in-ver-bottom");
  searchPage.classList.add("scale-out-ver-bottom");

  setTimeout(() => (searchPage.style.display = "none"), 300);
});

cities.forEach((city) => {
  city.addEventListener("click", () => {
    searchPage.classList.remove("scale-in-ver-bottom");
    searchPage.classList.add("scale-out-ver-bottom");
    locationBtnText.textContent = city.textContent;

    setTimeout(() => (searchPage.style.display = "none"), 300);
  });
});

dateHomeBtn.addEventListener("click", () => {
  dateSelectPage.style.display = "flex";
  dateSelectPage.classList.remove("scale-out-ver-bottom");
  dateSelectPage.classList.add("scale-in-ver-bottom");
});

closeDateIcon.addEventListener("click", () => {
  dateSelectPage.classList.remove("scale-in-ver-bottom");
  dateSelectPage.classList.add("scale-out-ver-bottom");
  setTimeout(() => (dateSelectPage.style.display = "none"), 300);
});

todayFilterBtn.addEventListener("click", () => {
  dateBtnText.textContent = todayFilterBtn.textContent;
  dateSelectPage.classList.remove("scale-in-ver-bottom");
  dateSelectPage.classList.add("scale-out-ver-bottom");
  setTimeout(() => (dateSelectPage.style.display = "none"), 300);
});

weekFilterBtn.addEventListener("click", () => {
  dateBtnText.textContent = weekFilterBtn.textContent;
  dateSelectPage.classList.remove("scale-in-ver-bottom");
  dateSelectPage.classList.add("scale-out-ver-bottom");
  setTimeout(() => (dateSelectPage.style.display = "none"), 300);
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
