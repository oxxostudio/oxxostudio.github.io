$(function() {
    var $window = $(window);
    var imgWidth, imgHeight, imgWidthMargin, imgHeightMargin;
    $.getJSON('../json/pageList.json', function(data) {
        var i;
        var dataNum = data.length;
        for (i = 0; i < dataNum; i++) {
            $('#container .article-list ul').append(
                '<li url='+data[i].site+'>' +
                '<div class="img-div">'+
                '<img src="' + data[i].img + '">'+
                '</div>' +
                '<h3>' + data[i].title + '</h3>' +
                '<span>' + data[i].date + '</span>' +
                '</li>'
            );
            if (i == (dataNum-1)) {
                fn_listHeight();
                fn_imgHover();
                fn_listLink();
            }
        }
    });
    var fn_imgHover = function() {
        $('.article-list li').hover(function() {
            $(this).find('img').addClass('imghover').css({
                'margin-top': -imgHeightMargin + 'px',
                'margin-left': -imgWidthMargin + 'px'
            });
        }, function() {
            $(this).find('img').removeClass('imghover').css({
                'margin-top': 0,
                'margin-left': 0
            });
        });
    }

    var fn_listHeight = function() {
        imgWidth = $('.article-list .img-div').width();
        imgHeight = Math.round(imgWidth * 26 / 29);
        imgWidthMargin = imgWidth * 0.05;
        imgHeightMargin = imgHeight * 0.05;
        $('.article-list .img-div').css({
            'height': imgHeight + 'px'
        });
    }

    var fn_listLink = function(){
        $('.article-listl li').on('click',function(){
            window.open($(this).attr('url'),'_self');
        });
    }

    $window.resize(function() {
        setTimeout(fn_listHeight, 10); //避免直接最大化時的誤差時間抓不到
    });
});
