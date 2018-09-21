$.noConflict();
var $ = jQuery;
$( document ).ready(function($){
    "use strict";

    /*Counter Js*/
    var count_load = 1;
    //function runcounter(){

    //}

    $(window).scroll(function() {
       if(count_load <= 1){
            //alert(count_load);
           $('.counter').counterUp({
               delay: 10,
               time: 1000
           });
            count_load++;
            //runcounter();
        } else {

       }
    });

    /* Equal height js */
    $( window ).on( "load", function(){
    var main_height = $('#image-block1').outerHeight();
    $('.gallery-image.video-block').css('height', main_height + 'px');

    var content_height = $('#lifeatmd-content').outerHeight();
    $('#lifeatmd-video').css('height', content_height + 'px');
    });

    /* Opening position Slider */
    $('.opening-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
        dots: false,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /* Testimonial Slider */
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
        dots: false,
        infinite: true,
        swipeToSlide: true,
        centerMode: false,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

    /* Opening position Slider */
    $('.gallery-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        prevArrow: '<div class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>',
        dots: false,
        infinite: true,
        swipeToSlide: false,
        draggable: false,
        centerMode: false,
        centerPadding: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
window.onload = function(){
    /*Masonry Gallery*/
    $('.gallery-box').isotope({
        itemSelector: '.gallery-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer',
            horizontalOrder: true
        }
    });
    $('.gallery-box').css('opacity',1);
    $('.lds-roller').hide();
}

    // Magnific Popup for gallery
    $('.gallery-image-popup').magnificPopup({
        gallery: {
            enabled: true,
            index: 0,
            tPrev: 'prev',
            tNext: 'Next',
        },
        type:'image',
        showCloseBtn: false,
    });

    //Video Popup
    $('.iframe-popup').magnificPopup({
        type: 'iframe',
        iframe: {
        patterns: {
                    youtube: {
                                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
                                src: '//www.youtube.com/embed/1jf96rs8X4Q' // URL that will be set as a source for iframe.
                            },
                }
            }
    });

    //Resume Form Btn Popup
    jQuery('.submitresume-btn').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '.submitresume-form-content',
        gallery: {
            enabled: false,
        },
        showCloseBtn:true,
    });

    jQuery('.submitresume-btn').on('click',function(){
        jQuery('.submitresume-form-content').show();
        var position = jQuery(this).attr("data");
        var position = jQuery('<textarea />').html(position).text();
        jQuery('#position_applied').val(position);
        jQuery('#position_applied').attr("readonly", "readonly");
    });
    /* Wow Initializer*/
    // new WOW().init();
    var wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       -10,          // default
    mobile:       true,       // default
    live:         true        // default
    })
    wow.init();

    // Back To top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.back-to-top');

    $(window).on("scroll", function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on("click", function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    //Particle JS
    if($('#particles-js').length > 0){
      particlesJS("particles-js", {"particles":{"number":{"value":25,"density":{"enable":true,"value_area":1000}},"color":{"value":["#ffe4da"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffe4da"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":true,"speed":1,"opacity_min":1,"sync":false}},"size":{"value":5,"random":false,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":100,"color":"#ffe4da","opacity":9,"width":1},"move":{"enable":true,"speed":2.5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":4498.141557303954,"rotateY":5602.948255589136}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":5}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":4}}},"retina_detect":true});
    }

    //Hover JS
    if($('.benefits-section .benefits-box').length > 0){
        $('.benefits-section .benefits-box').each( function() { $(this).hoverdir(); } );
    }

    //Header fixed
    $(window).scroll(function(){
        if($(window).scrollTop() > $('#header').innerHeight()){
            $('body').addClass('is_fixed');
        }else{
            $('body').removeClass('is_fixed');
        }
    });

    $(window).scroll(function(){
      var topDistance = $(window).scrollTop();
      var layers = $("[data-type='parallax']");
      
        $(layers).each(function(){
            var Layer_top = $(this).offset().top;
            var depth = $(this).attr('data-depth');
            var movement = -((topDistance-Layer_top) * depth);
            var translate3d = movement + 'px';
            $(this).css('background-position',"0 "+translate3d);
          return
        });
    });

//VIDEO POPUP
    jQuery('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});