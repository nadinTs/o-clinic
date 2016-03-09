$(document).bind('callmod',function(){
    console.log('Yahoooo!!!!');

});
$(document).ready(function(){
    $(".js-video-slider__inner").on('click',function(){
        console.log("hi");
        $(this).find('img').hide();
        $(this).append('<div class="article__inline-video__link js-insert-video">' +'<iframe width="100%" height="800px" src="video/video1.html" frameborder="0" allowfullscreen scrolling="no">' + '</iframe>' + '</div>');
    });
});
//<!--<div class="article__inline-video__link js-insert-video">
//<iframe src="video/video1.html" width="100%" height="800px" frameborder="0" scrolling="no" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>
//</div>-->