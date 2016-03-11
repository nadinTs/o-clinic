//$(document).bind('callmod',function(){
//    console.log('Yahoooo!!!!');
//    $(this).click(function(){
//        console.log(this);
//    });
//    //var fr = $(this).closest('iframe');
//    //$(this).remove();
//    //console.log(fr);
//});
$(document).ready(function(){
    $(".js-video-slider__inner").on('click',function(){
        $(this).find('img').animate({opacity: 'toggle'}, 1000);
        if($(this).find('img').css('opacity') == 1){
            console.log("hi");
            $(this).append('<div class="article__inline-video__link js-insert-video">' + '<video autoplay="true" width="100%" loop="loop" muted id="top_movie" poster="../img/slider-bottom.jpg">' + ' <source src="http://www.atmt.ru/wp-content/uploads/2015/03/2.mp4" type="video/mp4"> ' + ' <source src="http://www.atmt.ru/wp-content/uploads/2015/03/2.ogv" type="video/ogg">' + '<source src="http://www.atmt.ru/wp-content/uploads/2015/03/2.webm" type="video/webm">' + ' Your browser does not support HTML5 video.' + '</video>' + '</div>');
            $('div[class*="js-insert-video"]').bind('mousedown', function() {
                var video       = $(this).find('video')[0];
                console.log(video);
                $(this).click(function() {
                    if(video.paused) {
                        video.play();
                    }
                    else  {
                        video.pause();
                        console.log("poused ");

                    }
                });
            });

        } else {

        }

    });
});
//<!--<div class="article__inline-video__link js-insert-video">
//<iframe src="video/video1.html" width="100%" height="800px" frameborder="0" scrolling="no" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>
//</div>-->
jwplayer("player").setup({
    file:"../source/video/OC - videoslide - HQ.m4v",
    image:"../source/img/slider-bottom.jpg"
});
