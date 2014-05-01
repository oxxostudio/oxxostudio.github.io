$(function() {
    var $document = $(document);
    var $window = $(window);
    var $container = $('#container');
    var $sideMenu = $('#sideMenu');
    var $wrapper = $('#wrapper');
    var imgWidth, imgHeight, imgWidthMargin, imgHeightMargin;

    $.getJSON('../json/pageList.json', function(data) {
        var i;
        var dataNum = data.length;
        for (i = 0; i < 6; i++) {
            $('#container .new-articles .list ul').append(
                '<li url='+data[i].site+'>' +
                '<div class="img-div">'+
                '<div class="img-cover-1"></div>'+
                '<div class="img-cover-2">' + data[i].title + '</div>'+
                '<div class="img-cover-3">' + data[i].desc + '</div>'+
                '<img src="' + data[i].img + '">'+
                '</div>' +
                '<h3>' + data[i].title + '</h3>' +
                '<span>' + data[i].date + '</span>' +
                '</li>'
            );
            if (i == 5) {
                fn_listHeight();
                fn_imgHover();
                fn_listLink();
            }
        }
    });

    var fn_imgHover = function() {
        $('.new-articles .list ul li').hover(function() {
            $(this).find('img').addClass('imghover').css({
                'margin-top': -imgHeightMargin + 'px',
                'margin-left': -imgWidthMargin + 'px'
            });
            $(this).find('.img-cover-1').addClass('img-cover-1-hover');
            $(this).find('.img-cover-2').addClass('img-cover-2-hover');
            $(this).find('.img-cover-3').addClass('img-cover-3-hover');
        }, function() {
            $(this).find('img').removeClass('imghover').css({
                'margin-top': 0,
                'margin-left': 0
            });
            $(this).find('.img-cover-1').removeClass('img-cover-1-hover');
            $(this).find('.img-cover-2').removeClass('img-cover-2-hover');
            $(this).find('.img-cover-3').removeClass('img-cover-3-hover');
        });
    }

    var fn_listHeight = function() {
        imgWidth = $('.new-articles .list .img-div').width();
        imgHeight = Math.round(imgWidth * 26 / 29);
        imgWidthMargin = imgWidth * 0.05;
        imgHeightMargin = imgHeight * 0.05;
        $('.new-articles .list ul li .img-div').css({
            'height': imgHeight + 'px'
        });
    }

    var fn_listLink = function(){
    	$('#container .new-articles .list ul li').on('click',function(){
    		window.open($(this).attr('url'),'_self');
    	});
    }

    $window.resize(function() {
        setTimeout(fn_listHeight, 10); //避免直接最大化時的誤差時間抓不到
    });
});
