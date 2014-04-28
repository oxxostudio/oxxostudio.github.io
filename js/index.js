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
                '<li>' +
                '<div><img src="' + data[i].img + '"></div>' +
                '<h3>' + data[i].title + '</h3>' +
                '<span>' + data[i].desc + '</span>' +
                '</li>'
            );
            if (i == 5) {
                fn_listHeight();
                fn_imgHover();
            }
        }
    });

    //確認文章圖片已載入，避免選單高度錯誤
    // var fn_imgLoad = function(){
    //     var imgNum = 0;
    //     $('.list ul li img').load(function() {
    //         imgNum = imgNum + 1;
    //         if (imgNum == 6) {
    //             fn_listHeight();
    //             fn_imgHover();
    //             $sideMenu.css({
    //                 'height': $wrapper.height()+'px'
    //             });
    //         }
    //     });
    // };

    var fn_imgHover = function() {
        $('.new-articles .list ul li').hover(function() {
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
        imgWidth = $('.new-articles .list div').width();
        imgHeight = Math.round(imgWidth * 26 / 29);
        imgWidthMargin = imgWidth * 0.05;
        imgHeightMargin = imgHeight * 0.05;
        $('.new-articles .list ul li div').css({
            'height': imgHeight + 'px'
        });
    }

    $window.resize(function() {
        setTimeout(fn_listHeight, 10); //避免直接最大化時的誤差時間抓不到
    });
});
