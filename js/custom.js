// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "https://source.unsplash.com/1920x1280/?sea", 
	 		 "https://source.unsplash.com/1920x1280/?structure",
			 "https://source.unsplash.com/1920x1280/?Tree"
	 			], 	{duration: 3200, fade: 1300});
		});
})