$(function() {
  var $window = $(window);
  var $body = $('body');
  var $wrapper = $('#wrapper');
  var $container = $('#container');
  var nowUrl = location.href;
  var urlParts = nowUrl.split("/");
  var siteUrl = urlParts[0] + '//' + urlParts[2] + '/';
  var timer, bannerGifPosition = -4;
  var goodSentences = [
    'Design thinking is everywhere',
    'Good design is innovative',
    'I express myself with design',
    'Stay hungry, stay foolish',
    ':::::: www.oxxostudio.tw ::::::',
  ]

  $('#header').append(
    '<div id="top-menu">' +
    '<ul class="top-menu-left">' +
    '<li class="home" title="回首頁"><i></i><a href="/">HOME</a></li>' +
    '<li class="about" title="關於我"><i></i><a href="/articles/201405/about-me.html">ABOUT</a></li>' +
    '<li class="contact" title="聯絡方式"><i></i><a href="/articles/201405/contact.html">CONTACT</a></li>' +
    '</ul>' +
    '<a href="/list.html" title="文章列表"><div class="all-list"><i></i></div></a>' +
    '<div class="search" title="站內搜尋">SEARCH</div>' +
    '</div>' +
    '<div id="banner">' +
    '<h1>OXXO.STUDIO</h1>' +
    '<a href="/">' +
    '<i class="bubble"></i>' +
    '<i class="hihi"></i>' +
    '<img src="/img/layout/banner.png">' +
    '<h2>Design thinking is everywhere</h2>' +
    '</a>' +
    '</div>' +
    '<div id="main-menu">' +
    '<div class="mobile-menu">' +
    '<span></span>' +
    '<span></span>' +
    '<span></span>' +
    '</div>' +
    '<ul>' +
    '<li class="tag-all"><i></i>ALL</li>' +
    '<li class="tag-creative"><i></i>Creative</li>' +
    '<li class="tag-ui"><i></i>UI & UX</li>' +
    '<li class="tag-photo"><i></i>PHOTO</li>' +
    '<li class="tag-css"><i></i>CSS</li>' +
    '<li class="tag-web"><i></i>WEB TECH</li>' +
    '<li class="tag-share"><i></i>Share</li>' +
    '<li class="tag-others"><i></i>OTHERS</li>' +
    '</ul>' +
    '</div>' +
    '<div class="body-line"></div>'
  );
  $('#other-articles').append(
    '<h3>你可能對這些文章也感興趣</h3>'
  );
  $('#footer').append(
    '<div class="footer-line"></div>' +
    '<div class="footer-link">' +
    '<ul>' +
    '<li></li>' +
    '<li></li>' +
    '<li></li>' +
    '<li></li>' +
    '</ul>' +
    '</div>' +
    '<div class="license">Copyright 2014 | All Rights Reserved. Designed by <a href="/">OXXO.STUDIO</a></div>' +
    '</div>'
  );
  $body.append(
    "<script>" +
    "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
    "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
    "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
    "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" +
    "ga('create', 'UA-2708968-3', 'oxxostudio.tw');" +
    "ga('send', 'pageview');" +
    "</script>"
  );
  _mainMenu();
  _goodSentences();
  $window.resize(_mainMenu);

  $('#main-menu>ul>li').on('click', function() {
    var linkPage = $(this).attr('class');
    if (linkPage == 'tag-all') {
      window.open(siteUrl, '_self');
    } else {
      window.open(siteUrl + 'index.html?' + linkPage, '_self');
    }
  });

  $('.search').on('click', function() {
      _trackGA('search_click');
    alert('搜尋功能趕工中 >_<');
  });

  $('#banner').hover(
    _bannerGif, function() {
      clearTimeout(timer);
      _trackGA('banner_hover');
    }
  );

  $('#banner').on('click',function(){_trackGA('banner_click')});
  $('.top-menu-left .home').on('click',function(){_trackGA('topmenu_home')});
  $('#footer .license a').on('click',function(){_trackGA('footer_click')});

  $('.mobile-menu').on('click', function() {
    if ($('#main-menu ul').hasClass('menuOpen')) {
      $('#main-menu ul').removeClass('menuOpen');
      $('#main-menu ul li').hide();
    } else {
      $('#main-menu>ul').addClass('menuOpen');
      $('#main-menu ul li').show();
      $('#container').on('click', function() {
        $(this).off('click');
        $('#main-menu ul').removeClass('menuOpen').find('li').hide();
      });
    }
     _trackGA('mobilemenu_click');
  });

  function _bannerGif() {
    bannerGifPosition = bannerGifPosition - 18;
    if (bannerGifPosition > -347) {
      $('.bubble').css({
        'background-position': bannerGifPosition + 'px -390px'
      });
    } else {
      bannerGifPosition = -4;
      $('.bubble').css({
        'background-position': bannerGifPosition + 'px -390px'
      });
    }
    timer = setTimeout(_bannerGif, 100);
  }

  function _goodSentences() {
    var randomWord = Math.floor(Math.random() * goodSentences.length);
    $('#banner h2').text(goodSentences[randomWord]);
  }

  function _mainMenu() {
    if ($window.width() >= 1000) {
      $('#main-menu>ul').addClass('menuOpen').find('li').show();
      $('#container').off('click');
      $window.scroll(function() {
        if ($window.scrollTop() > 150) {
          $('#header').css({
            'top': '-150px'
          });
          $('#main-menu').css({
            'box-shadow': '0 5px 5px rgba(0, 0, 0, .35)'
          });
          $('#main-menu>ul').css({
            'margin-bottom': '2px'
          });

        } else {
          $('#header').css({
            'top': -$window.scrollTop() + 'px'
          });
          $('#main-menu').css({
            'box-shadow': '0 3px 3px rgba(0, 0, 0, .25)'
          })
          $('#main-menu>ul').css({
            'margin-bottom': '20px'
          });
        }
      });
    } else {
      $('#main-menu ul').removeClass('menuOpen').find('li').hide();
      $window.scroll(function() {
        $('#header').css({
          'top': '0px'
        });
      });
    }
  }

  function _trackGA(peopleEvent){
    ga('send', 'event', peopleEvent, peopleEvent);
    console.log(peopleEvent);
  }

});
