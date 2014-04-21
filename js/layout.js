$(function() {
    var $window = $(window);
    var $body = $('body');
    var $wrapper = $('#wrapper');
    var $container = $('#container');
    var $sideMenu = $('#sideMenu');
    var fn_changeSize = function() {
        if ($window.width() >= 1000) {
            var containerWidth = $wrapper.width() - 230;
            $container.css({
                'width': containerWidth + 'px'
            });
            var containerHeight = $container.height();
            $sideMenu.css({
                'height': containerHeight + 50 + 'px'
            });
        } else {
            $container.css({
                'width': '100%'
            });
        }
    }
    fn_changeSize();
    $(window).resize(fn_changeSize);

    $('.menuList div').on('click', function() {
        $('.menuList ul').css({'display':'table'});
        $(this).find('span').css({'background':':#fff'});
    });
    $container.on('click',function(){
        $('.menuList ul').css({'display':'none'});
        $('.menuList div span').css({'background':':#aaa'});
    });

});
