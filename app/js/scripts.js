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

    $('.goto').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    $(".popup").fancybox({
        type: 'inline'
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

$(document).on("submit", '.c-form', function(e) {
    e.preventDefault();
    var form = $(this);

    $.post('/send.php', form.serializeArray(), function(data) {
        if (data) {
            form.trigger('reset');
            form.find('.c-form-result').show().html(data);
        }
    });

    return false;
});