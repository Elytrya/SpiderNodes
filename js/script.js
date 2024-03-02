(function ($) {

  "use strict";

      // init Chocolat light box
      var initChocolat = function() {
        Chocolat(document.querySelectorAll('.image-link'), {
          imageSize: 'contain',
          loop: true,
        })
      }

  	// ------------------------------------------------------------------------------ //
	// Scroll Top 
	// ------------------------------------------------------------------------------ //
	
	var btn = $('#scroll-top-btn');

	$(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	  } else {
		btn.removeClass('show');
	  }
	});
	
	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});


  $(document).ready(function () {

    var swiper = new Swiper(".testimonial-swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {

        390: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }

    });

    initChocolat();

    // Animate on Scroll
    AOS.init({
      duration: 1000,
      once: true,
    })

    window.addEventListener("load", (event) => {
      //isotope
      $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });



      // Initialize Isotope
      var $container = $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });

      $(document).ready(function () {
        //active button
        $('.filter-button').click(function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
        });
      });

      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          // Show all items
          $container.isotope({ filter: '*' });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });

    });


    


  });


})(jQuery);
