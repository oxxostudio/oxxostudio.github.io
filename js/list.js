$(function() {
  var $window = $(window);
  var $content = $('.content');
  var windowWidth, contentWidth;
  $('#container').append(
    '<div class="tool-icon">' +
    '<i class="icon-home"><i></i><span>Back Home</span></i>' +
    '<i class="goto-top"><i></i><span>Back to Top</span></i>' +
    '</div>'
  );
  _showAll();
  _toolPosition();
  _toolClick();

  $window.resize(_toolPosition);

  $window.scroll(function() {
    if ($window.scrollTop() > 150) {
      $('.tool-icon').not('animated').fadeIn(300);
    } else {
      $('.tool-icon').not('animated').fadeOut(300);
    }
  });

  function _showAll() {
    $.getJSON('/json/pageList.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        $('.content ul').append(
          '<li class="' + data[i].tag + '">' +
          '<i></i>' +
          '<h3>' + data[i].date + '</h3>' +
          '<a href="' + data[i].site + '">' +
          '<h2>' + data[i].title + '</h2>' +
          '</a>' +
          '</li>'
        );
      }
    });
  }

  function _toolPosition() {
    $window.width() > 1000 ? windowWidth = $window.width() : windowWidth = 1000;
    contantWidth = $content.width();
    var dx = windowWidth / 2 + contantWidth / 2 + 10;
    $('.tool-icon').css({
      'left': dx + 'px'
    });
  }

  function _toolClick() {
    $('.icon-home').on('click', function() {
      window.open('/index.html', '_self');
    });
    $('.goto-top').on('click', function() {
      $("html,body").animate({
        "scrollTop": "0"
      }, 750);
    });
  }
});
