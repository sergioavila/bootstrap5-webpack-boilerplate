// Load Styles
import '../scss/main.scss';
// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});

//init swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


