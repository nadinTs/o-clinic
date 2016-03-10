$(document).ready(function(){
    var slider = $('.face-slide').bxSlider({
        mode: 'vertical',
        //pagerCustom: '#face-slide__mini',
        adaptiveHeight: true,
        pagerType: 'short',
        pagerShortSeparator: '/'
    });
    slider.on('mousewheel', function(event, delta, deltaX, deltaY) {
        if (delta > 0) {slider.goToPrevSlide();}
        if (deltaY < 0){slider.goToNextSlide();}
        event.stopPropagation();
        event.preventDefault();
    });
});


//slider = $('.face-slide').bxSlider();

