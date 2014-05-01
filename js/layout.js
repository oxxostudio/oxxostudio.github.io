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
            if ($('.menuList ul').hasClass('menuopen')) {} else {
                $('.menuList ul').css({'opacity':'1'}).show().addClass('menuopen');
                $('.menuList ul li').css({'opacity':'1'}).show();
            }
            $container.off('click');
        } else {
            $('.menuList ul li').hide();
            $('.menuList ul').hide().removeClass('menuopen');
            $container.css({
                'width': '100%'
            });
            $container.on('click', fn_menuListHide);
        }
    };
    var fn_menuListShow = function() {
        $('.menuList ul').slideDown(200).animate({'opacity':'1'},{queue : false, duration : 200}).addClass('menuopen');
        $('.menuList ul li').slideDown(200).animate({'opacity':'1'},{queue : false, duration : 200});
        $('.menuList div span').addClass('span-hover');
    };
    var fn_menuListHide = function() {
        $('.menuList ul').slideUp(200).animate({'opacity':'0'},{queue : false, duration : 200}).removeClass('menuopen');
        $('.menuList ul li').slideUp(200).animate({'opacity':'0'},{queue : false, duration :200});
        $('.menuList div span').removeClass('span-hover');
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
