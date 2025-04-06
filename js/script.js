$(document).ready(function () {

    /* menu ***********************************/

    $(".menu_mob_btn").click(function () {
        $(this).toggleClass("active");
        $(".menu_wrap").toggleClass("active");
    });

    $(".menu_mob_close").click(function () {
        $(".menu_wrap").toggleClass("active");
    });

    /* header_fixed ***********************************/

    $(window).scroll(function() {

        var header = $('.header').offset().top;
        if(header > 100){
            $('header').addClass('fixed');
        } else{
            $('header').removeClass('fixed');
        }

    });

    /* product_gallery ***********************************/

    $('.product_gallery').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });

    /* product_info ***********************************/

    $(".product_info").each(function () {
        $('.product_tabs_item').click(function() {
            let _parent = $(this).closest(".product_info");

            var id = $(this).attr('data-text'),
                content = $('.product_info_cont_block[data-text="'+ id +'"]');

            $('.product_info_cont_block', _parent).removeClass('active');
            content.addClass('active');

            $('.product_tabs_item', _parent).removeClass('active');
            $(this).addClass('active');
        });
    });

    /* product_info ***********************************/

    $(".header_contacts").each(function () {
        $('.header_phone_up').click(function() {
            $('.header_phone').toggleClass('active');
        });

    });
})