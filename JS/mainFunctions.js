
(function() {
    'use strict';
    $('.hamburger-menu').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('#splashText').css('top','50%').css('filter','blur(0px)');
            $('.menu-overlay').fadeToggle( 'fast', 'swing' );
            $('.menu .menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            $(this).addClass('active');
            $('#splashText').css('top','90%').css('filter','blur(4px)');
            $('.menu-overlay').fadeToggle( 'fast', 'swing' );
            $('.menu .menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
})();