$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click',function(){
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top -100
        },1000);
    });  

    $('#up').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },1000);
    });

    var initTopPosition= $('.menu-toggler').offset().top;   
    $(window).scroll(function(){
    if($(window).scrollTop() > initTopPosition)
        $('.menu-toggler').css({'position':'fixed','top':'30px'});
    else
        $('.menu-toggler').css({'position':'absolute','top':initTopPosition+'px'});
    });

    AOS.init({
        duration: 1000,
        once: true
    });
});
