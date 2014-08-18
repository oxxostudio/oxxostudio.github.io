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
    ':::::: www.oxxostudio.tw ::::::'
  ];

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

  $('#banner').on('click', function() {
    _trackGA('banner_click');
  });
  $('.top-menu-left .home').on('click', function() {
    _trackGA('topmenu_home');
  });
  $('#footer .license a').on('click', function() {
    _trackGA('footer_click');
  });

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
          });
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

  function _trackGA(peopleEvent) {
    ga('send', 'event', peopleEvent, peopleEvent);
  }

});
