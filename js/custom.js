// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// --------------------------------------------------------
$(document).ready(function() {
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
});

// --------------------------------------------------------
//	Navigation Bar
// --------------------------------------------------------
$(window).scroll(function(){
	"use strict";
	var scroll = $(window).scrollTop();
	if( scroll > 20 ){
		$(".navbar").addClass("scroll-fixed-navbar",100);
		$(".hashlearn-tab").addClass("hide-element");
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar",100);
		$(".hashlearn-tab").removeClass("hide-element");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// --------------------------------------------------------
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top-40
    }, 1000);
});


// --------------------------------------------------------
//	Hide Navbar onclick
// --------------------------------------------------------
$('.nav a').on('click', function(){
    $(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
});


// --------------------------------------------------------
//	Flex Slider
// --------------------------------------------------------
$(window).load(function() {
  $('#faq-slider').flexslider({
    animation: "slide",
    animationLoop: true
  });

	$('#features-slider').flexslider({
    animation: "slide",
    animationLoop: true
  });
});