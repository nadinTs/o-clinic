window.addEventListener('scroll', function(e) {
    var nav = document.querySelectorAll('section[id^="nav"]');
    for (var i = 0; i < nav.length; i++) {
        document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top-92 && nav[i].getBoundingClientRect().top-92 >= 1-nav[i].offsetHeight) ? 'red' : '');
    }
}, false);

$(document).ready(function(){
    $('#slider-top').bxSlider({
        pagerType:   'short',
        auto: true
    });
    $('#about-slider').bxSlider({
        controls:false,
        auto: true,
        mode: 'fade'
    });
    $('#video-slider').bxSlider({
        pagerType:   'short'
    });
    $('video-slider__ex').bxSlider({
        video: true,
        useCSS: false,
        touchEnabled:true,
        preventDefaultSwipeY:true
    });
    $(".link").click(function() {
        $.fancybox({
            'padding'		: 0,
            'autoScale'		: false,
            'transitionIn'	: 'none',
            'transitionOut'	: 'none',
            'title'			: this.title,
            'width'		: 680,
            'height'		: 495,
            'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'			: 'swf',
            'swf'			: {
                'wmode'		: 'transparent',
                'allowfullscreen'	: 'true'
            }
        });

        return false;
    });
});
//$(document).ready(function(){
//
//    function Plugin(element, options) {
//        var self = this;
//        this.element = element;
//
//        self.init();
//    }
//
//    Plugin.prototype = {
//        init: function() {
//            var self = this;
//
//            self.$link = $(self.element);
//
//            self.bindEvents();
//            self.parseLink();
//        },
//
//        bindEvents: function() {
//            var self = this;
//
//            $(window).resize(function() {
//                self.resizePlayer();
//            });
//        },
//
//        parseLink: function() {
//            var self = this,
//                actionType = self.$link.data('type') || 'parent',
//                iconClass = self.$link.data('icon') || 'g-play',
//                href = self.$link.attr('href') || '',
//                sizes;
//
//            if (href === '') {
//                return false;
//            }
//
//            //if (!self.$link.data('noImageUpdate')) {
//            //    if (~href.indexOf('youtube.com')) {
//            //        self.getYoutubePreview(self.$link, href, iconClass);
//            //    }
//            //}
//            if (actionType === 'click') {
//                self.$link.on('click', function(event) {
//                    event.preventDefault();
//                    sizes = self.parseSizes($(this).parent());
//                    var $parent = $(this).parent();
//                    $parent.html(self.insertVideo(href, sizes));
//                });
//            } else {
//                sizes = self.parseSizes(self.$link);
//                self.$link.parent().html(self.insertVideo(href, sizes));
//            }
//        },
//
//        getYoutubePreview: function($link, href, iconClass) {
//            var self = this,
//                resolution = [
//                    'maxresdefault',
//                    'sddefault',
//                    'mqdefault',
//                    'hqdefault',
//                    'default'
//                ];
//
//            self.checkYoutubePreview(resolution, $link, href, iconClass);
//
//        },
//
//        checkYoutubePreview: function(resolution, $link, href, iconClass) {
//            var self = this,
//                source = 'http://img.youtube.com/vi/' + self.getYoutubeId(href) + '/' + resolution[0] + '.jpg',
//                img = new Image();
//
//            $(img).load(function() {
//                if (this.width > 120) {
//                    self.insertImage($link, source, iconClass);
//                } else {
//                    resolution.splice(0, 1);
//                    self.checkYoutubePreview(resolution, $link, href, iconClass);
//                }
//            }).error(function() {
//                resolution.splice(1, 1);
//                self.checkYoutubePreview(resolution, $link, href, iconClass);
//            }).attr('src', source);
//        },
//
//        insertImage: function($link, source, icon) {
//            var $image = $link.find('img');
//
//            if ($image.length) {
//                if ($image.attr('src') === '') {
//                    $image.attr('src', source);
//                }
//            } else {
//                $link.append('<img src="' + source + '" /><span class="' + icon + '"></span>');
//            }
//        },
//
//        getYoutubeId: function(link) {
//            var id = '',
//                firstIndex = link.lastIndexOf('watch?v=') + 8,
//                lastIndex = link.lastIndexOf('#t=') > 0 ? link.lastIndexOf('#t=') : link.length;
//
//            id = link.substring(firstIndex, lastIndex);
//
//            if (~id.indexOf('&')) {
//                id = id.split('&')[0];
//            }
//
//            return id;
//        },
//
//        insertVideo: function(href, sizes) { //, mp4, img ){
//            var self = this,
//                playerHTML = '',
//                id = '',
//                autoPlayFlag = 1;
//
//            if (~href.indexOf('youtube.com')) {
//                id = self.getYoutubeId(href);
//                playerHTML = self.youtubePlayer(id, sizes, href, autoPlayFlag);
//
//            }
//
//            return playerHTML;
//        },
//
//        youtubePlayer: function(id, sizes, href, autoPlayFlag) {
//            autoPlayFlag = (autoPlayFlag) ? 1 : 0;
//
//            var player = '<div class="js-video-box" style="width:' + sizes.width + 'px; height:' + sizes.height + 'px">' +
//                '<iframe width="' + sizes.width + '" height="' + sizes.height + '" src="//www.youtube.com/embed/' + id + '?autoplay=' + autoPlayFlag + '&showinfo=0" frameborder="0" allowfullscreen></iframe>' +
//                '</div>';
//
//            return player;
//        },
//
//        parseSizes: function($container) {
//            var width = $container.width();
//            var height = parseInt((width / (4 / 3)), 10);
//
//            return {
//                width: width,
//                height: height
//            };
//        },
//
//        resizePlayer: function() {
//            var self = this,
//                sizes;
//
//            $('.js-video-box').each(function() {
//                sizes = self.parseSizes($(this).parent());
//                $(this).width(sizes.width).height(sizes.height);
//                $(this).find('VIDEO, OBJECT, EMBED, IFRAME, .jwplayer').width(sizes.width).height(sizes.height);
//            });
//        }
//
//    };
//
//    $.fn.insertVideo = function(options) {
//        return this.each(function() {
//            if (!$.data(this, 'plugin_insertVideo')) {
//                $.data(this, 'plugin_insertVideo', new Plugin(this, options));
//            }
//        });
//    };
//    //$('.video-slider').on('click', function() {
//        //$(this).parent('div.bx-viewport').cqhildren('.bx-default-pager').animate({opacity: 'toggle'}, 1000);
//        //$(this).find('.bx-default-pager').animate({opacity: 'toggle'}, 1000);
//        //console.log(this);
//    //});
//
//    $('.js-insert-video').insertVideo();
//
//});
$(document).ready(function() {
    $('.harmonica-menu-js li').click(function(){
        $(this).children('.harmonica-menu-js-hidden').slideToggle();
        $(this).children('.harmonica-menu-js-item').slideToggle();
        $(this).toggleClass('harmonica-menu-js-close');
        $(this).closest('li').toggleClass('harmonica-arrows');
    });
});

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
