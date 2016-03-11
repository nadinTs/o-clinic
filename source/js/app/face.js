$(document).ready(function(){
    var slider = $('.face-slide').bxSlider({
        mode: 'vertical',
        pagerCustom: '#face-slide__mini',
        adaptiveHeight: true,
        captions: 'true',
        //pagerType: 'short',
        pagerShortSeparator: '/'
    });
    slider.on('mousewheel', function(event, delta, deltaX, deltaY) {
        if (delta > 0) {slider.goToPrevSlide();}
        if (deltaY < 0){slider.goToNextSlide();}
        event.stopPropagation();
        event.preventDefault();
        var current = slider.getCurrentSlide();
        document.getElementById('current').innerHTML = current + 1;
    });
    var current = slider.getCurrentSlide();
    document.getElementById('current').innerHTML = current + 1;
    var slideQty = slider.getSlideCount();
    document.getElementById('slideQty').innerHTML = slideQty;

    $('div.bx-controls-direction').on('click', function(){
        var current = slider.getCurrentSlide();
        document.getElementById('current').innerHTML = current + 1;
    });
    //slider.on('click', function(){
    //    var current = slider.getCurrentSlide();
    //    console.log(current);
    //    var slideQty = slider.getSlideCount();
    //    console.log(slideQty);
    //});
});



