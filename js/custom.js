/**
Centinix v 1.3
Available on ThemeForest - http://themeforest.net/
Author: NasirWd - http://www.nasfactor.com
**/
/*global $:false */
(function(){
  "use strict";
  
/*-- Isotope Portfolio Filter --*/

	$(window).load(function() {
// cache container
var $container = $('#container');
// initialize isotope
$container.isotope({
  // options...
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});
	});


/*-- Page Smooth Scrolling --*/

	$(function() {
		$('ul.nav a').bind('click',function(event){
			var $anchor = $(this);
	
			$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
			}, 1500,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
					event.preventDefault();
					});
			});


/*-- Testimonial Slider --*/
	$(function() {		
     $('.testimonials-slider').bxSlider({	
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 32,
			auto: true,
			autoControls: false,
			});
});

/*-- Animation Fire --*/

$(function() {
  var $appeared = $('#appeared');

/*-------------------*/
  $('.animation-start').appear();
  $('#force').on('click', function() {
    $.force_appear();
  });
	
  $(document.body).on('appear', '.animation-start', function(e, $affected) {
    // this code is executed for each appeared element
	$(this).addClass('animated').removeClass('invisible');
/*-------------------*/

    $appeared.empty();
    $affected.each(function() {
      $appeared.append(this.innerHTML+"\n");
    });
  });

});


/*-- Main Banner Slider --*/

$(function() {
			
				var Page = (function() {

					var $nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );
							}
						} ),
						init = function() {
							initEvents();
						},
						initEvents = function() {
							$nav.each( function( i ) {
								$( this ).on( 'click', function(  ) {
									
									var $dot = $( this );

									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									}
									slitslider.jump( i + 1 );
									return false;
								});
							});
						};
						return { init : init };
				})();
				Page.init();
			});
			
			})();