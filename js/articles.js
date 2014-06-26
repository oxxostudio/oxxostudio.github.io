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
    '<i class="icon-list"><i></i><span>Article List</span></i>' +
    '<i class="icon-facebook"><i></i><span>Share on Facebook</span></i>' +
    '<i class="icon-google"><i></i><span>Share on Google+</span></i>' +
    '<i class="icon-twitter"><i></i><span>Share on Twitter</span></i>' +
    '<i class="goto-top"><i></i><span>Back to Top</span></i>' +
    '</div>'
  );

  _showTag(tag);
  _socialPosition();
  _socialClick(nowUrl);

  $window.resize(_socialPosition);
  $window.scroll(function() {
    if ($window.scrollTop() > 150) {
      $('.social-icon').not('animated').fadeIn(300);
    } else {
      $('.social-icon').not('animated').fadeOut(300);
    }
  });

  function _socialPosition() {
    $window.width() > 1000 ? windowWidth = $window.width() : windowWidth = 1000;
    contantWidth = $content.width();
    var dx = windowWidth / 2 + contantWidth / 2 + 10;
    $('.social-icon').css({
      'left': dx + 'px'
    });
  }

  function _socialClick(pageURL) {
    $('.icon-home').on('click', function() {
      window.open('/index.html', '_self');
    });
    $('.icon-list').on('click', function() {
      window.open('/list.html', '_self');
    });
    $('.icon-facebook').on('click', function() {
      window.open('http://www.facebook.com/share.php?u=' + pageURL, '_blank');
      _trackGA('share_to_facebook');
    });
    $('.icon-google').on('click', function() {
      window.open('https://plus.google.com/share?url=' + pageURL, '_blank');
      _trackGA('share_to_google');
    });
    $('.icon-twitter').on('click', function() {
      window.open('http://twitter.com/home/?status=' + pageURL, '_blank');
      _trackGA('share_to_twitter');
    });
    $('.goto-top').on('click', function() {
      $("html,body").animate({
        "scrollTop": "0"
      }, 750);
      _trackGA('goto_top');
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
      var randomNumA = [];
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
        for (j = classifyNum; j >= (classifyNum-4); j--) {
          var k=Math.floor(j*Math.random(j));  
          randomNumA[j-5]=classify.splice(k,1); 
          $('#other-articles').append(
            '<a href="' + randomNumA[j-5][0].site + '">' +
            '<div>' +
            '<img src="' + randomNumA[j-5][0].img + '">' +
            '<h4>' + randomNumA[j-5][0].title + '</h4>' +
            '</div>' +
            '</a>'
          );
        }
      }
    });
  }

  function _trackGA(peopleEvent) {
    ga('send', 'event', peopleEvent, peopleEvent);
  }
});
