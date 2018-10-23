// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

  $("#testitoggle1").click(function() {
    var elem = $("#testitoggle1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#testitoggle1").text("Read Less");
      $("#testitext1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#testitoggle1").text("Read More");
      $("#testitext1").slideUp();
    }

});

  $("#testitoggle2").click(function() {
    var elem = $("#testitoggle2").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#testitoggle2").text("Read Less");
      $("#testitext2").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#testitoggle2").text("Read More");
      $("#testitext2").slideUp();
    }

});

  $("#exp-col1").click(function() {
    if ($("#ico1").classList.contains("fa-angle-down")) {
      //Stuff to do when btn is in the read more state
      $("#ico1").classList.remove("fa-angle-down");
      $("#ico1").classList.add("fa-angle-up");

      $("#ans1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#ico1").classList.add("fa-angle-down");
      $("#ico1").classList.remove("fa-angle-up");

      $("#ans1").slideUp();
    }

});

})(jQuery); 
// End of use strict
