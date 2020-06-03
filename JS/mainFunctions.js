$(document).ready(function () {
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
                $('#splashText').css('top','85%').css('filter','blur(4px)');
                $('.menu-overlay').fadeToggle( 'fast', 'swing' );
                $('.menu .menu-list').slideToggle( 'slow', 'swing' );
                $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
})


/* <div id="content">
<div class="col text-center" id="splashText">
  <h1 class="display-4 text-break">Front-end Developer</h1>
  <p class="lead text-break">freelance user interface design & front-end development by Dawid Theron</p>        
</div> */