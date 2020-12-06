/**
 * Created by KRM on 1/13/16.
 */

$(document).ready(function(){

    $('.fdbk_sldr').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.btn').mouseup(function(){
        $(this).blur();
    });

});


// Smooth scroll
$(document).ready(function() {
    $('#quest_order').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -3
        }, 900);

    });
});