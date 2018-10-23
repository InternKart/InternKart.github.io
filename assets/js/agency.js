// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict





   /* if ($(window).innerWidth() <= 751) {
        
        $("#hide-small").addClass("hide");
   $("#show-small").removeClass("hide");
    }
    else {
   $("#show-small").addClass("hide");
   $("#hide-small").removeClass("hide");
    }*/

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

    if ($(window).width() <= 800) {
        
    $("#hide-small").addClass("hide");
   $("#show-small1").removeClass("hide");
   $("#show-small2").removeClass("hide");
   $("#show-small3").removeClass("hide");
   $("#show-small4").removeClass("hide");
   $("#show-small5").removeClass("hide");
    }
    else {
   $("#show-small1").addClass("hide");
   $("#show-small2").addClass("hide");
   $("#show-small3").addClass("hide");
   $("#show-small4").addClass("hide");
   $("#show-small5").addClass("hide");
   $("#hide-small").removeClass("hide");
    }

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
    if ($("#ico1").hasClass("fa-angle-down")) {
      //Stuff to do when btn is in the read more state
      $("#ico1").removeClass("fa-angle-down");
      $("#ico1").addClass("fa-angle-up");

      $("#ans1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#ico1").addClass("fa-angle-down");
      $("#ico1").removeClass("fa-angle-up");

      $("#ans1").slideUp();
    }

});

  $("#exp-col2").click(function() {
    if ($("#ico2").hasClass("fa-angle-down")) {
      //Stuff to do when btn is in the read more state
      $("#ico2").removeClass("fa-angle-down");
      $("#ico2").addClass("fa-angle-up");

      $("#ans2").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#ico2").addClass("fa-angle-down");
      $("#ico2").removeClass("fa-angle-up");

      $("#ans2").slideUp();
    }

});


$("#exp-col3").click(function() {
    if ($("#ico3").hasClass("fa-angle-down")) {
      //Stuff to do when btn is in the read more state
      $("#ico3").removeClass("fa-angle-down");
      $("#ico3").addClass("fa-angle-up");

      $("#ans3").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#ico3").addClass("fa-angle-down");
      $("#ico3").removeClass("fa-angle-up");

      $("#ans3").slideUp();
    }

});


$("#exp-col4").click(function() {
    if ($("#ico4").hasClass("fa-angle-down")) {
      //Stuff to do when btn is in the read more state
      $("#ico4").removeClass("fa-angle-down");
      $("#ico4").addClass("fa-angle-up");

      $("#ans4").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#ico4").addClass("fa-angle-down");
      $("#ico4").removeClass("fa-angle-up");

      $("#ans4").slideUp();
    }

});


$("#exp-col5").click(function() {
    if ($("#ico5").hasClass("fa-angle-down")) {
      //Stuff to do when btn is in the read more state
      $("#ico5").removeClass("fa-angle-down");
      $("#ico5").addClass("fa-angle-up");

      $("#ans5").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#ico5").addClass("fa-angle-down");
      $("#ico5").removeClass("fa-angle-up");

      $("#ans5").slideUp();
    }

});


$("#exp-col6").click(function() {
    if ($("#ico6").hasClass("fa-angle-down")) {
      //Stuff to do when btn is in the read more state
      $("#ico6").removeClass("fa-angle-down");
      $("#ico6").addClass("fa-angle-up");

      $("#ans6").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#ico6").addClass("fa-angle-down");
      $("#ico6").removeClass("fa-angle-up");

      $("#ans6").slideUp();
    }

});


})(jQuery); 
// End of use strict
