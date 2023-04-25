//= components/script.js
//= components/script2.js 
//= components/script3.js

const burgerIcon = document.querySelector('.nav__burger-icon');
const burgerMenu = document.querySelector('.nav-mobile');
const burgerCross = document.querySelector('.nav-mobile__cross');

burgerIcon.addEventListener('click', () => {
  burgerMenu.classList.add('active');
});

burgerCross.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
});

var swiper = new Swiper(".sliders", {

	slidesPerView: "auto",
	spaceBetween: 30,
	slidesPerView: 1,
	// loop: true,

	navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },


});