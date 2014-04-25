$(function() {
    var $window = $(window);
    var $body = $('body');
    var $wrapper = $('#wrapper');
    var $container = $('#container');
    var $sideMenu = $('#sideMenu');
    var timer;
    var fn_changeSize = function() {
        if ($window.width() >= 1000) {
            var containerWidth = $wrapper.width() - 230;
            $container.css({
                'width': containerWidth + 'px'
            });
            timer = setInterval(function() {
                if ($('#container .new-articles .list ul li').length ==6) {
                    var containerHeight = $container.height();
                    console.log(containerHeight);
                    $sideMenu.css({
                        'height': containerHeight + 50 + 'px'
                    });
                    clearTimeout(timer);
                }
            }, 10);
            $('.menuList ul').hasClass('menuopen') ? '' : $('.menuList ul').css({
                'display': 'table'
            }).addClass('menuopen');
        } else {
            $('.menuList ul').css({
                'display': 'none'
            }).removeClass('menuopen');
            $container.css({
                'width': '100%'
            });
        }
    }
    var fn_sideMenuStatus = function() {
        $('.menuList div').on('click', function() {
            if ($('.menuList ul').hasClass('menuopen')) {
                $('.menuList ul').css({
                    'display': 'none'
                }).removeClass('menuopen');
                $('.menuList div span').css({
                    'background': '#aaa'
                });
            } else {
                $('.menuList ul').css({
                    'display': 'table'
                }).addClass('menuopen');
                $(this).find('span').css({
                    'background': '#fff'
                });
            }
        });
        $container.on('click', function() {
            $('.menuList ul').css({
                'display': 'none'
            }).removeClass('menuopen');
            $('.menuList div span').css({
                'background': '#aaa'
            });
        });
    }

    fn_changeSize();
    $(window).resize(fn_changeSize);

    fn_sideMenuStatus();
});
