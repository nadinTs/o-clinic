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
            $(this).append('<div class="article__inline-video__link js-insert-video">' +'<iframe width="100%" height="800px" src="video/video1.html" frameborder="0" allowfullscreen scrolling="no">' + '</iframe>' + '</div>');
            var iframe = document.getElementsByTagName('iframe')[0];
            var iframeDoc = iframe.contentWindow.document;
            if (iframeDoc.readyState == 'complete') {
                iframeDoc.body.style.backgroundColor = 'green';
                alert("jjjj");
            }
            iframe.onload = function() {
                var iframeDoc2 = iframe.contentWindow.document;
                alert("dddddd");
            }

        } else {




            //$(this).find('div.js-insert-video').remove();
            //frame.parentNode.removeChild(frame);

        }
        //$(this).find('img').hide();
        //$(this).append('<div class="article__inline-video__link js-insert-video">' +'<iframe width="100%" height="800px" src="video/video1.html" frameborder="0" allowfullscreen scrolling="no">' + '</iframe>' + '</div>');
    });
});
//<!--<div class="article__inline-video__link js-insert-video">
//<iframe src="video/video1.html" width="100%" height="800px" frameborder="0" scrolling="no" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe>
//</div>-->