const header = document.querySelector('.header');
const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');
const serviceContainer = document.querySelector('.box-container');


//menu
menu.onclick = () => {
  navbar.classList.toggle('active');
}
//While scrolling
window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    header.classList.add('active');
  }
  else{
    header.classList.remove('active');
  }

}

//for counter animation
document.addEventListener('DOMContentLoaded', function() {
  var counterSection = document.querySelector('.counter');
  var elements = counterSection.querySelectorAll('.count-num');

  function startCountAnimation() {
    elements.forEach(function(element) {
      var targetValue = parseInt(element.textContent, 10);
      var duration = 3500;
      var startTime = null;

      function animateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var increment = Math.ceil((targetValue / duration) * progress);

        if (increment >= targetValue) {
          element.textContent = targetValue + '+';
        } else {
          element.textContent = increment + '+';
          requestAnimationFrame(animateCount);
        }
      }

      requestAnimationFrame(animateCount);
    });
  }

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function checkIfInView() {
    if (isElementInViewport(counterSection)) {
      startCountAnimation();
      window.removeEventListener('scroll', checkIfInView);
    }
  }

  window.addEventListener('scroll', checkIfInView);
  checkIfInView();
});


let accordion = document.querySelectorAll('.accordion-container .accordion');
let accordionIcon = document.querySelector('.accordion accordion-heading i');

accordion.forEach(acco =>{
  acco.onclick = () =>{
    accordion.forEach(subAcco => { 
      subAcco.classList.remove('active'); 
  });
    acco.classList.add('active');
  }
})

var swiper = new Swiper(".review-slider",{
  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  },
  loop:true,
  spaceBetween: 20,
  grabCursor:true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});