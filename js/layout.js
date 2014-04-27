$(function() {
    var $window = $(window);
    var $body = $('body');
    var $wrapper = $('#wrapper');
    var $container = $('#container');
    var $sideMenu = $('#sideMenu');
    //RWD
    var fn_changeSize = function() {
        if ($window.width() >= 984) {
            var containerWidth = $wrapper.width() - 230;
            $container.css({
                'width': containerWidth + 'px'
            });
            $sideMenu.css({
                'height': $container.height()+50 + 'px'
            });
            $('.menuList ul').hasClass('menuopen') ? '' : $('.menuList ul').css({
                'display': 'table'
            }).addClass('menuopen');
            $container.off('click');
        } else {
            $('.menuList ul').css({
                'display': 'none'
            }).removeClass('menuopen');
            $container.css({
                'width': '100%'
            });
            $container.on('click', fn_menuListHide);
        }
    };
    var fn_menuListShow = function() {
        $('.menuList ul').css({
            'display': 'table'
        }).addClass('menuopen');
        $(this).find('span').css({
            'background': '#fff'
        });
    };
    var fn_menuListHide = function() {
        $('.menuList ul').css({
            'display': 'none'
        }).removeClass('menuopen');
        $('.menuList div span').css({
            'background': '#aaa'
        });
    };
    var fn_sideMenuStatus = function() {
        $('.menuList div').on('click', function() {
            if ($('.menuList ul').hasClass('menuopen')) {
                fn_menuListHide();
            } else {
                fn_menuListShow();
            }
        });
        $container.on('click', fn_menuListHide);
    };
    fn_sideMenuStatus();
    fn_changeSize();
    $(window).resize(fn_changeSize);
});
