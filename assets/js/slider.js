// Img Slider
$(document).ready(function () {
    $(".body__slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
        dots: true,
        swipe: false,
    });
});

// Text Slider
$(document).ready(function () {
    $(".text__slider").slick({
        slidesToShow: 1,
        speed: 800,
        swipe: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="ti-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="ti-arrow-right"></i></button>`,
    });
});

// Category Slider
$(document).ready(function () {
    $(".category-list").slick({
        slidesToShow: 4,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
    });
});

// Product Slider
$(document).ready(function () {
    $(".product-list").slick({
        rows: 3,
        slidesToShow: 5,
        slidesToScroll: 4,
        infinity: false,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
    });
});

