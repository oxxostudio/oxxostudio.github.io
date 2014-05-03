$(function() {
    var $window = $(window);
    var $body = $('body');
    var $wrapper = $('#wrapper');
    var $container = $('#container');
    var $sideMenu = $('#sideMenu');
    var nowUrl = location.href;
    var urlParts = nowUrl.split("?");
    var fn_sideMenuContent = function() {
        $sideMenu.append(
            '<div id="profile">' +
            '<h1>OXXO.STUDIO</h1>' +
            '<div class="img">' +
            '<img src="img/layout/profile-img.png" height="74" width="74">' +
            '</div>' +
            '<div class="menu">' +
            '<ul>' +
            '<li>' +
            '<i class="icon-sprite icon-menu icon-menu-aboutme"></i>' +
            '<a href="#">About Me</a>' +
            '</li>' +
            '<li>' +
            '<i class="icon-sprite icon-menu icon-menu-picasa"></i>' +
            '<a href="#">Picasa</a>' +
            '</li>' +
            '<li>' +
            '<i class="icon-sprite icon-menu icon-menu-contact"></i>' +
            '<a href="#">Contact</a>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>'
        );
        $sideMenu.append(
            '<div class="line"></div>'
        );
        $sideMenu.append(
            '<div class="menuList">' +
            '<div><span></span><span></span><span></span></div>' +
            '<ul>' +
            '<li url="index"><a href="index.html">HOME</a></li>' +
            '<li url="all-articles"><a href="articles.html?all-articles">ALL ARTICLES</a></li>' +
            '<li url="front-end"><a href="articles.html?front-end">FRONT-END</a></li>' +
            '<li url="css"><a href="articles.html?css">CSS CRAFTS</a></li>' +
            '<li url="ui"><a href="articles.html?ui">UI & UX</a></li>' +
            '<li url="design"><a href="articles.html?design">DESIGN</a></li>' +
            '</ul>' +
            '</div>'
        );
        $sideMenu.append(
            '<div class="license">' +
            '<span></span><span></span><span></span><span></span><span></span><span></span>' +
            '<div>LICENSE</div>' +
            '<div>This license lets others remix, tweak, ' +
            'and build upon your work non-commercially, ' +
            'as long as they credit you and license their ' +
            'new creations under the identical terms.</div>' +
            '</div>'
        );
        $container.prepend(
            '<div class="container-title">' +
            '<h1>' +
            '<i class="icon-sprite icon-title"></i>' +
            'OXXO.STUDIO<span> |&nbsp;&nbsp;Design thinking is everywhere</span>' +
            '</h1>' +
            '<i class="icon-sprite icon-social icon-twitter"></i>'+
            '<i class="icon-sprite icon-social icon-googleplus"></i>'+
            '<i class="icon-sprite icon-social icon-facebook"></i>'+
            '</div>' +
            '<div class="line"></div>'
        );
        if (urlParts[1]) {
            $('.menuList li[url=' + urlParts[1] + ']').find('a').addClass('active');
        } else {
            $('.menuList li[url=' + $('body').attr('url') + ']').find('a').addClass('active');
        }
    }
    var fn_changeSize = function() {
        if ($container.height() < $window.height()) {
            $container.css({
                'height': $(window).height() + 'px'
            });
        }
        if ($window.width() >= 984) {
            var containerWidth = $wrapper.width() - 230;
            $container.css({
                'width': containerWidth + 'px'
            });
            if ($('.menuList ul').hasClass('menuopen')) {} else {
                $('.menuList ul').css({
                    'opacity': '1'
                }).show().addClass('menuopen');
                $('.menuList ul li').css({
                    'opacity': '1'
                }).show();
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
        $('.menuList ul').slideDown(200).animate({
            'opacity': '1'
        }, {
            queue: false,
            duration: 200
        }).addClass('menuopen');
        $('.menuList ul li').slideDown(200).animate({
            'opacity': '1'
        }, {
            queue: false,
            duration: 200
        });
        $('.menuList div span').addClass('span-hover');
    };
    var fn_menuListHide = function() {
        $('.menuList ul').slideUp(200).animate({
            'opacity': '0'
        }, {
            queue: false,
            duration: 200
        }).removeClass('menuopen');
        $('.menuList ul li').slideUp(200).animate({
            'opacity': '0'
        }, {
            queue: false,
            duration: 200
        });
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
    var fn_socialShare = function(){
      $('.icon-facebook').on('click',function(){
        window.open('http://www.facebook.com/share.php?u=' + urlParts);
      });
      $('.icon-googleplus').on('click',function(){
        window.open('https://plus.google.com/share?url=' + urlParts);
      });
      $('.icon-twitter').on('click',function(){
        window.open('http://twitter.com/home/?status=' + urlParts);
      });
    };
    fn_sideMenuContent();
    fn_sideMenuStatus();
    fn_changeSize();
    fn_socialShare();
    $(window).resize(fn_changeSize);
});
