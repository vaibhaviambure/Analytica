const progressCircle = document.querySelector("#mainVisual .autoplay-progress svg");
const progressContent = document.querySelector("#mainVisual .autoplay-progress span");
var mainSwiper = new Swiper(".main_slide", {
	loop: true,
	speed:1200,
    parallax: true,
	slideActiveClass: 'on',
	autoplay: {
		delay: 3200,
		disableOnInteraction: false,
	},
    pagination:{
        el:"#mainVisual .pager",
        type:"fraction",
    },    
	navigation: {
		nextEl: '#mainVisual .next',
		prevEl: '#mainVisual .prev',
	},
    on:{
        autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        }
    }    
});
$('#mainVisual .swiper-pause').click(function(){
	mainSwiper.autoplay.stop();
});
$('#mainVisual .swiper-play').click(function(){
	mainSwiper.autoplay.start();
});
$(function() { 
    $("#mainVisual .play").click(function() {
        $(this).toggleClass("on");
    });
});




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        768:{
            items:2
        },
        1024:{
            items:3
        },
        1440:{
            items:4
        },
        1000:{
            items:4
        }
        
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  // * Animation on scroll
  // */
  AOS.init();
  AOS.refresh(); // initialize AOS animations
  $(document).ready(function(){
      $("body,html").animate({
          scrollTop: 10
      }, 1000);
      $("body,html").animate({
          scrollTop: 0
      }, 1);
  });
  



  
  