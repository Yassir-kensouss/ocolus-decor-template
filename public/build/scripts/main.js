/*toggle nav bar on small screens*/

// Select DOM items
const menuBtn = document.querySelector('.humberger');
const menu = document.querySelector('.col2');
const lines = document.querySelectorAll('.line');

// Set initial state of menu

let showMenu = false;

// menuBtn.addEventListener('click',toggleMenu);

menuBtn.addEventListener('click',function(){
  if(!showMenu)
  {
    menuBtn.classList.add('close');
  
    menu.classList.add('show');

    showMenu = true;

    
  }else{

    menuBtn.classList.remove('close');
    
    menu.classList.remove('show');

    showMenu = false;

    

  }
});

/*--------------recommended product swiper-------------------*/

var swiper = new Swiper('.reco-product-swipper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    // when window width is >= 1000
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    // when window width is >= 1000
    1326: {
      slidesPerView: 4,
      spaceBetween: 20
    },

  }
});

/*-------------------------Heart Button---------------------*/

var heart_button = document.querySelectorAll('.heart-svg');
var heart_state = false;

for(let i=0 ; i<heart_button.length ; i++)
{
  
    heart_button[i].addEventListener('click',function(){

      if(heart_state == false)
      {
        this.classList.add('active');
  
        heart_state = true;
      }
      else{

        this.classList.remove('active');
  
        heart_state = false;

      }

    });

  
}

/*--------------customer success story swiper-------------------*/

var swiper = new Swiper('.customer_story_slider', {
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    // when window width is >= 1000
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    },

  }
});

/*---------------expand navigation bar on scroll-------------*/

const navbar = document.querySelector('.header-warraper');
const logo = document.querySelector('.ocolus-logo');

window.addEventListener('scroll',function(){

  if(this.scrollY >= 200)
  {
    navbar.classList.add('expand');
    logo.classList.add('lg-width');
  }
  else
  {
    navbar.classList.remove('expand');
    logo.classList.remove('lg-width');
  }

});