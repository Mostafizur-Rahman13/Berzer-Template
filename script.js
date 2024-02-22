var swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let Autoswiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 3000,
  },
});
