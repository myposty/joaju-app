window.sr = ScrollReveal({ duration: 2000 });


sr.reveal('.presentation__section', 50);
sr.reveal('.enterprise__functions', 50);
ScrollReveal().reveal('.desgin__system');
ScrollReveal().reveal('.administration__section');
ScrollReveal().reveal('.seguimiento__section');
ScrollReveal().reveal('.contact__section');



document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
  trigger: 'a[href^="#contacto"]',       
  duration: 1000,                 
  easing: 'easeInOutExpo',

    });
    const industria = new SweetScroll({
      trigger: 'a[href^="#industria"]',       
      duration: 1000,                 
      easing: 'easeInOutExpo',
    });
    const canales = new SweetScroll(
      {
        trigger: 'a[href^="#canales"]',       
        duration: 1000,                 
        easing: 'easeInOutExpo',
      }
    );
    const administracion = new SweetScroll(
      {
        trigger: 'a[href^="#administracion"]',       
  duration: 1000,                 
  easing: 'easeInOutExpo',
      }
    );
    const seguimiento = new SweetScroll(
      {
        trigger: 'a[href^="#seguimiento"]',       
  duration: 1000,   
  easing: 'easeInOutExpo',
      }
    );
    const top = new SweetScroll({
      trigger: 'a[href^="#top"]',
      duration: 1000,                 
      easing: 'easeInOutExpo',
    });
  },
  false,
);



//boton volar al cielo xd
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});


//scrol and hide header  functions
const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");
const headerHeight = document.querySelector("header").offsetHeight;

main.style.top = headerHeight + "px";

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  // console.log("current: ", currentScroll);
  // console.log("last: ", lastScroll);

  if (currentScroll - lastScroll > 0) {
      // scrolled down -- header hide
      header.classList.add("scroll-down");
      header.classList.remove("scroll-up");
  } else {
      // scrolled up -- header show
      header.classList.add("scroll-up");
      header.classList.remove("scroll-down");
  }

  lastScroll = currentScroll;
  // console.log("last: ", lastScroll);
});