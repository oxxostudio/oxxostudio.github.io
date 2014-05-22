$(function() {
  var $window = $(window);
  var $body = $('body');
  var $wrapper = $('#wrapper');
  var $container = $('#container');
  var nowUrl = location.href;
  var urlParts = nowUrl.split("/");
  var siteUrl = urlParts[0] + '//' + urlParts[2] + '/';

  $('#header').append(
    '<div id="top-menu">' +
    '<ul class="top-menu-left">' +
    '<li class="home"><i></i><a href="/">HOME</a></li>' +
    '<li class="about"><i></i><a href="/articles/201405/about-me.html">ABOUT</a></li>' +
    '<li class="contact"><i></i><a href="/articles/201405/contact.html">CONTACT</a></li>' +
    '</ul>' +
    // '<div class="link">' +
    // '<img src="/img/layout/about.png">' +
    // '</div>' +
    '<div class="search">' +
    '<img src="/img/layout/search.png">' +
    '</div>' +
    '</div>' +
    '<div id="banner">' +
    '<h1>OXXO.STUDIO</h1>' +
    '<a href="/">' +
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
    '<div class="license">Copyright 2014 | All Rights Reserved. Designed by OXXO.STUDIO</div>' +
    '</div>'
  );
  $body.append(
    "<script>" +
    "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
    "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
    "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
    "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" +
    "ga('create', 'UA-2708968-3', 'oxxostudio.github.io');" +
    "ga('send', 'pageview');" +
    "</script>"
  );
  _mainMenu();
  _mobileMenu();
  $window.resize(_mainMenu);
  $window.resize(_mobileMenu);

  function _mainMenu() {
    if ($window.width() > 1000) {
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
    }
  }

  $('#main-menu>ul>li').on('click', function() {
    var linkPage = $(this).attr('class');
    if (linkPage == 'tag-all') {
      window.open(siteUrl, '_self');
    } else {
      window.open(siteUrl + 'index.html?' + linkPage, '_self');
    }
  });

  function _mobileMenu() {
    if ($window.width() < 1000) {
      $('#main-menu>ul').removeClass('menuOpen').hide();
      $('.mobile-menu').on('click', function() {
        if ($('#main-menu>ul').hasClass('menuOpen')) {
          $('#main-menu>ul').removeClass('menuOpen').hide();
        } else {
          $('#main-menu>ul').addClass('menuOpen').show();
        }
      });
      $('#container').on('click', function() {
        $('#main-menu>ul').removeClass('menuOpen').hide();
      });
    } else {
      $('#main-menu>ul').addClass('menuOpen').show();
      $('#container').off('click');
    }
  }

});
