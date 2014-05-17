$(function() {
  var $window = $(window);
  var imgWidth, imgHeight, imgWidthMargin, imgHeightMargin,
    dataLength, urlPages, pageNum, pageTag;
  var nowUrl = location.href;
  var urlParts = nowUrl.split("?");
  if (urlParts[1]) {
    urlPages = urlParts[1].split("=");
    pageTag = urlPages[0];
    pageNum = urlPages[1];
    if (urlPages[0] == 'tag-all') {
      _showAll();
    } else {
      _showTag(pageTag);
    }
  } else {
    _showAll();
  }

  function _showAll() {
    $.getJSON('/json/pageList.json', function(data) {
      dataLength = data.length;
      dataLength<6 ? maxNum=dataLength : maxNum=6;
      var i = -1;
      _renderContent(1);

      function _renderContent(Num) {
        i = i + Num;
        for (i = 0; i < 6; i++) {
          $('#content-grid>ul').append(
            '<li>' +
            '<i class="' + data[i].tag + '"></i>' +
            '<h2>' + data[i].title + '</h2>' +
            '<h3><i class="icon-date"></i>' + data[i].date + '</h3>' +
            '<h3><i class="icon-author"></i>OXXO.STUDIO</h3>' +
            '<div class="content-img">' +
            '<span></span>' +
            '<img src="' + data[i].img + '">' +
            '</div>' +
            '<div class="content-grid-line"></div>' +
            '<h4>' + data[i].desc + '</h4>' +
            '<a href="' + data[i].site + '"><div class="read-more">Read more</div></a>' +
            '</li>'
          );
        }
      }
      _pageNum(dataLength);
    });
  }

  function _showTag(tagName) {
    $.getJSON('/json/pageList.json', function(data) {
      dataLength = data.length;
      var classify = [];
      var classifyNum = 0;
      var i,maxNum;
      for (i = 0; i < dataLength; i++) {
        if (data[i].tag == tagName) {
          classify[classifyNum] = data[i];
          classifyNum = classifyNum + 1;
        }
      }
      classifyNum<6 ? maxNum=classifyNum : maxNum=6;
      var j = -1;
      _renderContent(1);
      function _renderContent(Num) {
        i = i + Num;
        for (j = 0; j < maxNum; j++) {
          $('#content-grid>ul').append(
            '<li>' +
            '<i class="' + classify[j].tag + '"></i>' +
            '<h2>' + classify[j].title + '</h2>' +
            '<h3><i class="icon-date"></i>' + classify[j].date + '</h3>' +
            '<h3><i class="icon-author"></i>OXXO.STUDIO</h3>' +
            '<div class="content-img">' +
            '<span></span>' +
            '<img src="' + classify[j].img + '">' +
            '</div>' +
            '<div class="content-grid-line"></div>' +
            '<h4>' + classify[j].desc + '</h4>' +
            '<a href="' + classify[j].site + '"><div class="read-more">Read more</div></a>' +
            '</li>'
          );
        }
      }
    });
  }

  function _pageNum(num) {
    var j, k;
    if (num > 6) {
      j = Math.ceil(num / 6);
      for (k = 1; k <= j; k++) {
        $('#page-num').append(
          '<div>' + k + '</div>'
        );
      }
    }
  }
});
