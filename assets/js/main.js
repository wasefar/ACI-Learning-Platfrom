$(document).ready(function(){

	// static menu

    $(window).scroll(function () {

    if ($(document).scrollTop() > 50) {
        $(".top_header_area").addClass("sticky");
    } else {
        $(".top_header_area").removeClass("sticky");
    }

});

    // event slider

    $('.owl-carousel.event-slider').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
         navText: ["<img src='assets/image/left-arrow.png'>","<img src='assets/image/right-arrow.png'>"],
        autoplay: true,
        //animateOut: 'zoomOutDown',
        // animateIn: 'zoomIn',
        smartSpeed: 450,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // login overlay

    $('.login').click(function () {

        $('.overlay_login_area').addClass('animated zoomIn faster').show();
    });


    $('.go_back.login_area_go').click(function () {

        $('.overlay_login_area').removeClass('animated zoomIn slow').hide();
    });



    // menu overlay

    $('.bars').click(function () {

        $('.overlay_mobile_menu').addClass('animated fadeInLeft faster').show();
    });


    $('.cross_nav').click(function () {

        $('.overlay_mobile_menu').removeClass('animated zoomIn slow').hide();
    });


    // fade effect div

    AOS.init({
        duration: 1000
    });

// end fade effect div 


});