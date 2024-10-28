var swiper = new Swiper(".slide-intro", {
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".slide-intro .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-studio", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
