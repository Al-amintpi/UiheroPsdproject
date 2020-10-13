$(document).ready(function(){
	 $('.content-area').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
	});

	 $('.qoute-item').owlCarousel({
		items:1,
		nav:false,
		loop:true,
		dots:false,
		nav:true
	});

	$('.client-logo').owlCarousel({
    	 
    	loop:true,
		autoplayTimeout:1000,
	    margin:10,
	    dots:false,
	    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
	     
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

$(window).scroll(function(){
	var scrollValue = $(this).scrollTop();
	console.log(scrollValue);
	if(scrollValue>700){
		$('.header-menu').addClass('fixedMenu');
	}else{
		$('.header-menu').removeClass('fixedMenu');
	}
});

$(document).ready(function(){
	$('.menu-icon').click(function(){
		$('.menu').slideToggle(1000);
	});
});