// function mf_height_function() {
//     var mf_height = $('footer').innerHeight();
//     $('body').css('padding-bottom', mf_height + 'px');
// }

// $(window).on('load resize change', function() {
//     mf_height_function();
// });

$(document).ready(function() {
    $('.menu-btn').click(function() {
        $(this).toggleClass('active');
        $('.menu').slideToggle();
    });

    $('.video-link').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });

    $('.faq__question').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
        $(this).siblings('.faq__answer').slideToggle();
    });

    // $('.using-slider').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     responsive: {
    //         1201: {
    //             items: 4,
    //         },
    //         992: {
    //             items: 3,
    //         },
    //         500: {
    //             items: 2,
    //         },
    //     },
    // });
});