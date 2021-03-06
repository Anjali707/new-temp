(function ($) {
"use strict";



// meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

$('.info-bar').on('click', function () {
        $('.extra-info').addClass('info-open');
    })

    $('.close-icon').on('click', function () {
        $('.extra-info').removeClass('info-open');
    })

// sticky
var wind = $(window);
var sticky = $('#sticky-header');
wind.on('scroll', function () {
	var scroll = wind.scrollTop();
	if (scroll < 100) {
		sticky.removeClass('sticky');
	} else {
		sticky.addClass('sticky');
	}
});



// mainSlider

    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
			arrows:false,
		    prevArrow:'<button type="button" class="slick-prev"> <i class="ti-angle-left"></i> </button>',
            nextArrow:'<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
mainSlider();


/* counter */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
})

/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	navText:['<i class="ti-shift-left"></i>','<i class="ti-shift-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:2
        },
        1200:{
            items:2
        }
    }
})

/* testimonial2-active */
$('.testimonial2-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	navText:['<i class="ti-shift-left"></i>','<i class="ti-shift-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

/* testimonial3-active */
$('.testimonial3-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	navText:['<i class="ti-shift-left"></i>','<i class="ti-shift-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        }
    }
})

/* shop-details-active */
$('.shop-details-active').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
	autoplay:true,
	navText:['<i class="ti-shift-left"></i>','<i class="ti-shift-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
})



/* image-link */
$('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});





// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

// niceSelect
$('select').niceSelect();

/* Price filter active */
$("#slider-range").slider({
	range: true,
	min: 0,
	max: 500,
	values: [75, 300],
	slide: function (event, ui) {
		$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
	}
});
$("#amount").val("$" + $("#slider-range").slider("values", 0) +
	" - $" + $("#slider-range").slider("values", 1));

// map
function basicmap() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 11,
		scrollwheel: false,
		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(40.6700, -73.9400), // New York
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "hue": "#ffb500" }, { "lightness": "54" }, { "saturation": "-61" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#c8d7d4" }, { "visibility": "on" }] }]
	};
	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('contact-map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.6700, -73.9400),
		map: map,
		title: 'Cryptox'
	});
}
if ($('#contact-map').length != 0) {
	google.maps.event.addDomListener(window, 'load', basicmap);
}







})(jQuery);