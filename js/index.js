$(function() {
	var $document = $(document);
    var $window = $(window);
    var $container = $('#container');
    var $sideMenu = $('#sideMenu');
    var imgHeight;

    $.getJSON('../json/pageList.json', function(data) {
        var dataNum = data.length;

        for (i = 0; i < 6; i++) {
            $('#container .new-articles .list ul').append(
                '<li>' +
                '<div><img src="' + data[i].img + '"></div>' +
                '<h3>' + data[i].title + '</h3>' +
                '<span>' + data[i].desc + '</span>' +
                '</li>'
            );
        }
    });

    //確認文章圖片已載入，避免選單高度錯誤
    var timer = setInterval(function() {
        var i = 0;
        $('.list ul li img').load(function() {
            $sideMenu.css({
                'height': $container.height() + 50 + 'px'
            });
            i = i + 1;
            if (i == 6) {
                imgHeight = $('.list ul li img').height();
    			fn_listHeight();
                fn_imgHover();
                clearTimeout(timer);
            }
        });
    }, 10);

    var fn_imgHover = function() {
        $('.new-articles .list ul li').hover(function() {
            $(this).find('img').addClass('imghover');
        }, function() {
            $(this).find('img').removeClass('imghover');
        });
    }

    var fn_listHeight = function() {
        $('.new-articles .list ul li').css({
            'height': imgHeight + 70 + 'px'
        });
        $('.new-articles .list ul li div').css({
            'height': imgHeight + 'px'
        });
    }

    $window.resize(function(){
    	imgHeight = $('.list ul li img').height();
    	fn_listHeight();
    });

});
