$(function() {
    var $window = $(window);
    var imgWidth, imgHeight, imgWidthMargin, imgHeightMargin;
    var nowUrl = location.href;
    var urlParts = nowUrl.split("?");
    var readMore = 0;
    var maxArticleNum = 20;

    function fn_getJSON(type) {
        $.getJSON('../json/pageList.json', function(data) {
            var i, n;
            var j = 0;
            var k = maxArticleNum;
            var dataNum = data.length;
            var classify = [];
            var classifyNum = 0;
            fn_getListNum(dataNum, type);
            if (classifyNum > k) {
                fn_ajax(j, k);
            } else {
                fn_ajax(j, classifyNum);
                $('.read-more').hide();
            }
            $('.read-more').on('click', function() {
                j = j + maxArticleNum;
                k = k + maxArticleNum;
                if (classifyNum > k) {
                    fn_ajax(j, k);
                    $('.read-more').show();
                } else {
                    fn_ajax(j, classifyNum);
                    $('.read-more').hide();
                }
            });

            function fn_getListNum(listNum, type) {
                for (i = 0; i < listNum; i++) {
                    if (data[i].type == type) {
                        classify[classifyNum] = data[i];
                        classifyNum = classifyNum + 1;
                    }
                }
            }

            function fn_ajax(min, max) {
                for (n = min; n < max; n++) {
                    $('#container .article-list ul').append(
                        '<li type="' + classify[n].type + '">' +
                        '<a href="' + classify[n].site + '">' +
                        '<div class="img-div">' +
                        '<img src="' + classify[n].img + '">' +
                        '</div>' +
                        '<h3>' + classify[n].title + '</h3>' +
                        '<span>' + classify[n].date + '</span>' +
                        '</a>' +
                        '</li>'
                    );
                    if (n == (max - 1)) {
                        fn_listHeight();
                        fn_listOrGrid();
                    }
                }
            }
        });
    };

    function fn_getAll() {
        $.getJSON('../json/pageList.json', function(data) {
            var i;
            var dataNum = data.length;
            var j = 0;
            var k = maxArticleNum;
            if (dataNum > k) {
                fn_ajax(j, k);
                $('.read-more').show();
            } else {
                fn_ajax(j, dataNum);
                $('.read-more').hide();
            }
            $('.read-more').on('click', function() {
                j = j + maxArticleNum;
                k = k + maxArticleNum;
                if (dataNum > k) {
                    fn_ajax(j, k);
                } else {
                    fn_ajax(j, dataNum);
                    $('.read-more').hide();
                }
            });

            function fn_ajax(min, max) {
                for (i = min; i < max; i++) {
                    $('#container .article-list ul').append(
                        '<li>' +
                        '<a href="' + data[i].site + '">' +
                        '<div class="img-div">' +
                        '<img src="' + data[i].img + '">' +
                        '</div>' +
                        '<i class="new-'+data[i].type+'">' + data[i].type + '</i>' +
                        '<h3>' + data[i].title + 
                        '<i class="new-'+data[i].type+'">' + data[i].type + '</i>' +
                        '</h3>' +
                        '<span>' + data[i].date + '</span>' +
                        '</a>' +
                        '</li>'
                    );
                    if (i == (max - 1)) {
                        fn_listHeight();
                        fn_listOrGrid();
                    }
                }
            }
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

    fn_contentFilter();
    $window.resize(function() {
        fn_listHeight();
    });
});
