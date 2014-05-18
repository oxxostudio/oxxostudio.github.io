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
    '<a href="/">'+
    '<div id="banner">' +
    '<h1>OXXO.STUDIO</h1>' +
    '<img src="/img/layout/banner.png">' +
    '<h2>Design thinking is everywhere</h2>' +
    '</div>' +
    '</a>'+
    '<div id="main-menu">' +
    '<div class="mobile-menu">' +
    '<span></span>' +
    '<span></span>' +
    '<span></span>' +
    '</div>' +
    '<ul>' +
    '<li class="tag-all"><i></i>ALL</li>' +
    '<li class="tag-design"><i></i>DESIGN</li>' +
    '<li class="tag-ui"><i></i>UI & UX</li>' +
    '<li class="tag-ill"><i></i>IllUSTRATION</li>' +
    '<li class="tag-photo"><i></i>PHOTO</li>' +
    '<li class="tag-css"><i></i>CSS</li>' +
    '<li class="tag-web"><i></i>WEB TECH</li>' +
    '<li class="tag-others"><i></i>OTHERS</li>' +
    '</ul>' +
    '</div>' +
    '<div class="body-line"></div>'
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

  $window.scroll(function() {
    if ($window.scrollTop() > 160) {
      $('#header').css({
        'position': 'fixed',
        'top': '-160px'
      });
      $('#container').css({
        'margin-top': '258px'
      });
      $('#main-menu').css({
        'box-shadow': '0 5px 5px rgba(0, 0, 0, .35)'
      });
      $('#main-menu>ul').css({
        'margin-bottom': '5px'
      });

    } else {
      $('#header').css({
        'position': 'relative',
        'top': '0'
      });
      $('#container').css({
        'margin-top': '0'
      });
      $('#main-menu').css({
        'box-shadow': '0 3px 3px rgba(0, 0, 0, .25)'
      })
      $('#main-menu>ul').css({
        'margin-bottom': '20px'
      });
    }
  });


  $('#main-menu>ul>li').on('click', function() {
    var linkPage = $(this).attr('class');
    if (linkPage == 'tag-all') {
      window.open(siteUrl, '_self');
    } else {
      window.open(siteUrl + 'index.html?' + linkPage, '_self');
    }
  });

});
