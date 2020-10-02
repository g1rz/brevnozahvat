function mf_height_function() {
    var mf_height = $('footer').innerHeight();
    $('body').css('padding-bottom', mf_height + 'px');
}

$(window).on('load resize change', function() {
    mf_height_function();
});

$(document).ready(function() {
    $('.menu-btn').click(function() {
        $(this).toggleClass('active');
        $('.main-menu').slideToggle();
    });

    $('.main-menu__icon').click(function(e) {
        if ($(window).width() <= 768) {
            e.preventDefault();
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $(this).parent().siblings('.submenu').slideDown();
            } else {
                $(this).parent().siblings('.submenu').slideUp();
            }

        }
    });

    $('.using-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            1201: {
                items: 4,
            },
            992: {
                items: 3,
            },
            500: {
                items: 2,
            },
        },
    });
});

$(document).mouseup(function(e) {
    var dropdown = $('.dropdown');

    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        dropdown.removeClass('active');
        $('.dropdown__list').slideUp();
    }
});

function addRemoveActive(el) {
    if (el.hasClass('active')) {
        el.removeClass('active');
    } else {
        el.addClass('active');
    }
}

// var $video = $('.about__video');
//     var $window = $(window);

//     $window.scroll(function() {

//       var $topOfVideo = $video.offset().top;
//       var $bottomOfVideo = $video.offset().top + $video.outerHeight();

//       var $topOfScreen = $window.scrollTop();
//       var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

//       if(($bottomOfScreen > $bottomOfVideo / 2) && ($topOfScreen < $topOfVideo)){
//         $video[0].play();
//       } else {
//         $video[0].pause();
//       }

//     });