$(function() {
  var j, tag = $('#container>.content>i').attr('class');
  var $window = $(window);
  var $document = $(document);
  var $content = $('.content');
  var windowWidth, contentWidth;
  var nowUrl = location.href;

  $('pre').addClass('prettyprint');

  $('#container').append(
    '<div class="social-icon">' +
    '<i class="icon-home"><i></i><span>Back Home</span></i>' +
    '<i class="icon-facebook"><i></i><span>Share on Facebook</span></i>' +
    '<i class="icon-google"><i></i><span>Share on Google+</span></i>' +
    '<i class="icon-twitter"><i></i><span>Share on Twitter</span></i>' +
    '<i class="goto-top"><i></i><span>Back to Top</span></i>' +
    '</div>'
  );

  _showTag(tag);
  _socialPosition();
  _socialClick();

  $window.resize(_socialPosition);
  $window.scroll(function() {
    if ($window.scrollTop() > 150) {
      $('.social-icon').not('animated').fadeIn(300);
    } else {
      $('.social-icon').not('animated').fadeOut(300);
    }
  });

  function _socialPosition() {
    $window.width() > 1100 ? windowWidth = $window.width() : windowWidth = 1100;
    contantWidth = $content.width();
    var dx = windowWidth / 2 + contantWidth / 2 + 10;
    $('.social-icon').css({
      'left': dx + 'px'
    });
  }

  function _socialClick() {
    $('.icon-home').on('click', function() {
      window.open('/index.html', '_self');
    });
    $('.icon-facebook').on('click', function() {
      window.open('http://www.facebook.com/share.php?u=' + nowUrl, '_blank');
    });
    $('.icon-google').on('click', function() {
      window.open('https://plus.google.com/share?url=' + nowUrl, '_blank');
    });
    $('.icon-twitter').on('click', function() {
      window.open('http://twitter.com/home/?status=' + nowUrl, '_blank');
    });
    $('.goto-top').on('click', function() {
      $("html,body").animate({
        "scrollTop": "0"
      }, 750);

    });
  }

  function _showTag(tagName) {
    $.getJSON('/json/pageList.json', function(data) {
      dataLength = data.length;
      var classify = [];
      var classifyNum = 0;
      var i, maxNum;
      for (i = 0; i < dataLength; i++) {
        if (data[i].tag == tagName) {
          classify[classifyNum] = data[i];
          classifyNum = classifyNum + 1;
        }
      }
      var maxNum;
      if (classifyNum <= 5) {
        for (j = 0; j < classifyNum; j++) {
          $('#other-articles').append(
            '<a href="' + classify[j].site + '">' +
            '<div>' +
            '<img src="' + classify[j].img + '">' +
            '<h4>' + classify[j].title + '</h4>' +
            '</div>' +
            '</a>'
          );
        }
      } else {
        for (j = 1; j < 6; j++) {
          $('#other-articles').append(
            '<a href="' + classify[j].site + '">' +
            '<div>' +
            '<img src="' + classify[j].img + '">' +
            '<h4>' + classify[j].title + '</h4>' +
            '</div>' +
            '</a>'
          );
        }
      }
    });
  }
});
