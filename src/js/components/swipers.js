import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const family = document.getElementById('family-swiper')

const swiperFamaly = new Swiper(family, {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 45, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const potential = document.getElementById('potential-swiper')

const swiperPotential = new Swiper(potential, {
  direction: 'horizontal',
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});


const familyArticleSwiper = document.getElementById('family-article-swiper')

const swiperArticleFamily = new Swiper(familyArticleSwiper, {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});