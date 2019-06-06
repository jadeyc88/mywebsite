$(document).ready (function(){
      
	var scroll = new SmoothScroll('a[href*="#"]');

    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
    
});

/**$(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider) {
          $('body').removeClass('loading');
        }
      });
    }); */