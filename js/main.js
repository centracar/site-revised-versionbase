jQuery(document).ready(function() {	
	"use strict"; // Start of use strict
    
	// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
	
	// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

	//SCROLL SECTION
	jQuery('a[href*="#"]:not([href="#"]):not(.accordion-toggle):not(.carousel-control)').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				if (window.innerWidth <= 768) {
					$('html, body').animate({
						scrollTop: target.offset().top - 50
					}, 1000);
					
				} else {
					$('html, body').animate({
						scrollTop: target.offset().top - 130
					}, 1000);
				}	
				return false;
			}
		}
	});

	//GALLERY
	jQuery(".fancybox").fancybox({
    	helpers : {
    		title : {
    			type : 'over'
    		}
    	}
    });

	//CLIENTS
	jQuery('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    dots:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplaySpeed:1000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})
});