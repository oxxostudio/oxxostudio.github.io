$(function() {
    var $window = $(window);
    var imgWidth, imgHeight, imgWidthMargin, imgHeightMargin;
    var nowUrl = location.href;
    var urlParts = nowUrl.split("?");
    var readMore = 0;
    var maxArticleNum = 8;

    function fn_getJSON(type) {
        $.getJSON('../json/pageList.json', function(data) {
            var i;
            var dataNum = data.length;
            fn_ajax(dataNum,type);
            function fn_ajax(listNum, type) {
                for (i = 0; i < listNum; i++) {
                    if (data[i].type == type) {
                        $('#container .article-list ul').append(
                            '<li type="' + data[i].type + '">' +
                            '<a href="' + data[i].site + '">' +
                            '<div class="img-div">' +
                            '<img src="' + data[i].img + '">' +
                            '</div>' +
                            '<h3>' + data[i].title + '</h3>' +
                            '<span>' + data[i].date + '</span>' +
                            '</a>' +
                            '</li>'
                        );
                    }
                    if (i == (listNum - 1)) {
                        fn_listHeight();
                        fn_listOrGrid();
                        fn_imgHover();
                    }
                }
            }
        });
    };
    function fn_getAll() {
        $.getJSON('../json/pageList.json', function(data) {
            var i;
            var dataNum = data.length;
            fn_ajax(dataNum);
            function fn_ajax(listNum) {
                for (i = 0; i < listNum; i++) {
                    $('#container .article-list ul').append(
                        '<li type="' + data[i].type + '">' +
                        '<a href="' + data[i].site + '">' +
                        '<div class="img-div">' +
                        '<img src="' + data[i].img + '">' +
                        '</div>' +
                        '<h3>' + data[i].title + '</h3>' +
                        '<span>' + data[i].date + '</span>' +
                        '</a>' +
                        '</li>'
                    );
                    if (i == (listNum - 1)) {
                        fn_listHeight();
                        fn_listOrGrid();
                        fn_imgHover();
                    }
                }
            }
        });
    };

    var fn_imgHover = function() {
        $('.article-list .grid-view li').hover(function() {
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
    };

    var fn_listHeight = function() {
        imgWidth = $('.article-list .grid-view .img-div').width();
        imgHeight = Math.round(imgWidth * 26 / 29);
        imgWidthMargin = imgWidth * 0.05;
        imgHeightMargin = imgHeight * 0.05;
        $('.article-list .grid-view .img-div').css({
            'height': imgHeight + 'px'
        });
    };

    var fn_contentFilter = function() {
        switch (urlParts[1]) {
            case 'all-articles':
                fn_getAll();
                $('.article-list h2 span').text('所有文章列表');
                break;
            case 'front-end':
                fn_getJSON('front-end');
                $('.article-list h2 span').text('網頁前端技術');
                break;
            case 'css':
                fn_getJSON('css');
                $('.article-list h2 span').text('CSS 相關技術');
                break;
            case 'ui':
                fn_getJSON('ui');
                $('.article-list h2 span').text('UI & UX');
                break;
            case 'design':
                fn_getJSON('design');
                $('.article-list h2 span').text('視覺設計');
                break;
        }
    };

    var fn_listOrGrid = function() {
        $('h2 .grid-view').on('click', function() {
            $('.article-list ul').removeClass('list-view').addClass('grid-view');
            $('#container h2 .grid-view').addClass('active');
            $('#container h2 .list-view').removeClass('active');
        });
        $('h2 .list-view').on('click', function() {
            $('.article-list ul').removeClass('grid-view').addClass('list-view');
            $('#container h2 .list-view').addClass('active');
            $('#container h2 .grid-view').removeClass('active');
            $('.menuList>ul').addClass('list-view');
        });
    };

    var fn_readMore = function() {
        $('.read-more').on('click', function() {
            readMore = readMore + maxArticleNum;
            $.getJSON('../json/pageList.json', function(data) {
                var i;
                var j = readMore + maxArticleNum;
                var dataNum = data.length;
                console.log(j);
                if (dataNum > j) {
                    fn_ajax(j);
                    $('.read-more').show();
                } else {
                    fn_ajax(dataNum);
                    $('.read-more').hide();
                }
                function fn_ajax(listNum) {
                    for (i = readMore; i < listNum; i++) {
                        $('#container .article-list ul').append(
                            '<li type="' + data[i].type + '">' +
                            '<a href="' + data[i].site + '">' +
                            '<div class="img-div">' +
                            '<img class="lazy" src="' + data[i].img + '">' +
                            '</div>' +
                            '<h3>' + data[i].title + '</h3>' +
                            '<span>' + data[i].date + '</span>' +
                            '</a>' +
                            '</li>'
                        );
                        if (i == (listNum - 1)) {
                            fn_listHeight();
                            fn_contentFilter();
                            fn_listOrGrid();
                            fn_imgHover();
                        }
                    }
                }
            });
        });
    };

    fn_contentFilter();
    $window.resize(function() {
        fn_listHeight();
    });
});
