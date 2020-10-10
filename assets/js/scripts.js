$(document).ready(function(){
	 $('.banners').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		autoplay:true,
		autoplayTimeout:3000,
		animateOut: 'fadeOut'
	});

	 $('.qoute-item').owlCarousel({
		items:1,
		nav:false,
		loop:true,
		dots:false,
		nav:true
	});

	$('.client-logo').owlCarousel({
     
    	rtl:true,
    	loop:true,
    	autoplay:true,
		autoplayTimeout:1000,
	    margin:10,
	    dots:false
	     
	});

	$('.twitter-feed-carousel').owlCarousel({
		items:1,
		nav:false,
		loop:true,
		dots:false,
		nav:true, 
	});

	$('.work-popup').magnificPopup({
  		type: 'image', 
  		gallery:{
    	enabled:true
  	}

	});
});