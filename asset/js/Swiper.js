var swiper = new Swiper(".slide-content", {
  slidesPerView: 8,
  spaceBetween: 30,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    520: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    950: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});
