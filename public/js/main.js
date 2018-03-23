$( document ).ready(function(){

	var feed = new Instafeed({
	        get: 'user',
	        userId: '790050572',
	        limit: 12,
	        resolution: 'standard_resolution',
	        accessToken: '790050572.1677ed0.9e6d1dc5d97d4466a9b077130c0150b1',
	        sortBy: 'most-recent',
	        template: '<div class="col-lg-3 col-md-4 cake-instagram"><a href="{{image}}" title="{{caption}}" target="_blank"><div class="cake-target" style="background-image: url({{image}});"></div></a></div>'
	});
	feed.run();

	// This will create a single gallery from all elements that have class "gallery-item"
	$('.gallery').magnificPopup({
	  type: 'image',
	  delegate: 'a',
	  gallery:{
	    enabled:true
	  }
	});

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      var target = $(hash).offset().top -100;

      $('html, body').animate({
        scrollTop: target
      }, 1000);
    } // End if
  });


});

