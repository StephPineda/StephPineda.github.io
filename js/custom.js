/** Custom Js **/

$(document).ready(function(){
  "use strict"; // Start of use strict

  // Navbar
  $('a.page-scroll').on('click', function(event) { // jQuery for page scrolling feature - requires jQuery Easing plugin
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 100
  });
  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').on(function() {
      $('.navbar-toggle:visible').on();
  });
  // Offset for Main Navigation
  $('#mainNav').affix({
      offset: {
          top: 50
      }
  })


  // Counter 
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
      

  // Skill Circle
  $('.skil-circle').percentcircle();


  // Back To Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });
  

  // Preloader 
  $(window).load(function() { // makes sure the whole site is loaded
    var preloader=$('#preloader div');
    preloader.fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
  });


}); // End of use strict












