$(document).ready(function () {
    $('.slider').bxSlider({
        captions: true, 
        nextText: '',
        prevText: '',
        easing: 'jswing',
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    });
});