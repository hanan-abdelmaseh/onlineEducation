$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load', function() {
        $('.nav-bar').removeClass('nav-toggle');
        $('.fa-bars').removeClass('fa-times');
        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active')
        } else {
            $('header').removeClass('header-active')
        }
    });
    $('.nav-bar li a').click(function(){
        $('.nav-bar a').removeClass('active');
        $(this).addClass('active')
    })
})