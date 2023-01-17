(function ($)
  { "use strict"
  
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    // menu
    $('.mobile_menu').on('click', function() {
      $('.main-menu').toggle();
    })
    $('.close').on('click', function (){
      $('.main-menu').hide();
    })
    // swiper
    const swiper = new Swiper('.swiper', {
      spaceBetween : 150,
      loop: true,
      stopOnLastSlide : false,
      autoplay : {
        delay : 2000
      }
    });
    // parallax
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);
    // tabs
    $('.nav-item').on('click', function(e) {
      e.preventDefault();
      let currTab = $(this).index();

      $('.nav-item').removeClass('active');
      $(this).addClass('active');

      $('.tab-pane').removeClass('show active');
      $('.tab-pane').eq(currTab).addClass('show active');

    });
    // modal-window
    $('.header-btn').on('click', function(){
      $('.wrapper-modal').fadeIn();
    })
    $('.overlay').on('click', function(){
      $('.wrapper-modal').fadeOut();
    })
    $('.form-book').children('click', function(e){
      e.stopPropagantion();
    })
    // validate
    $.validator.addMethod('regex', function(value, element, regexp){
      let regExsp = new RegExp(regexp);
      return this.optional(element) || regExsp.test(value)
    }), 'please check your input';

    $('.form-head').validate({
      rules : {
        firstName :{
          required : true,
          regex : "[A-Za-z]{1,32}"
        },
        phone : {
          required : true,
          digits : true,
          minlenght : 10,
          maxlenght : 11,
          regex : "[0-9]+"
      },
      messages : {
        firstName : "введіть правильно ім'я",
        phone : "невірний номер телефону"
      }
    }
  })

    $('.form-about').validate({
      rules : {
        firstName :{
          required : true,
          regex : "[A-Za-z]{1,32}"
        },
        email : {
          required : true,
          regex : "[A-Za-z]{1,32}"
        },
        phone : {
          required : true,
          digits : true,
          minlenght : 10,
          maxlenght : 11,
          regex : "[0-9]+"
        }
      },
      messages : {
        firstName : "введіть правильно ім'я",
        phone : "невірний номер телефону"
      }
    })







})(jQuery);
