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

  
/////////////////////////////
/* let menutoggle = document.querySelector('.btn__menu');
let navmenu = document.querySelector('.nav__mobile');
menutoggle.onclick = function () {
    menutoggle.classList.toggle('active');
    navmenu.classList.toggle('active');
   
} */

