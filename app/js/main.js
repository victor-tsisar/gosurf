$(document).ready(function () {
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="right">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="left">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            },
        ]
    });

    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="right">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="left">',
        asNavFor: '.slider-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.surf__map',
        responsive: [
            {
                breakpoint: 1211,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
        ]
    });

    $('.surf__map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.surf__slider',
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    focusOnSelect: false,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    focusOnSelect: false,
                }
            },
            {
                breakpoint: 374,
                settings: {
                    slidesToShow: 1,
                    focusOnSelect: false,
                }
            },
        ]
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="right">',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="left">',
    });

    // Лічильник ночей і гостей в готелі
    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // Витрати на готель 
    function valueOfSleep() {
        let summ = $('.nights').val() * $('.info-item__summ').data('nights') + ($('.guests').val() - 1) * $('.info-item__summ').data('guests') - 1;
        $('.info-item__summ').html('$' + summ);
    }

    $('.quantity-button').on('click', function () {
        valueOfSleep();
    })

    valueOfSleep();

    // dots for surfboard
    $('.surfboard-box__circle').on('click', function(){
        $(this).toggleClass('active');
    });

    // mobile-menu
    $('.menu-btn').on('click', function () {
        $('.menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    new WOW().init();

});