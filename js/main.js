
(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})

  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$(document).ready(function(){
		$("#owl-slider").owlCarousel({
			navigation: false,
			pagination: true,
			itemsCustom : [
				[0, 1],
				[700, 2],
				[960, 3]
			 ],
			navigationText: false
		});
	});
	

	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  
	  var pxShow = 300;
	  var fadeInTime = 400;
	  var fadeOutTime = 400;
   
	  $(document).ready(function() {
		 $(window).scroll(function() {
			if (!$("#header-search").hasClass('is-visible')) {
			   if ($(window).scrollTop() >= pxShow) {
				  $("#go-top").fadeIn(fadeInTime);
			   } else {
				  $("#go-top").fadeOut(fadeOutTime);
			   }
			}
		 });
	  });
   })(jQuery);