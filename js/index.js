$(function() {
  var $window = $(window);
  var imgWidth, imgHeight, imgWidthMargin, imgHeightMargin,
    dataLength, urlPages, pageNum, pageTag;
  var nowUrl = location.href;
  var urlParts1 = nowUrl.split("?");
  var urlParts2 = nowUrl.split("/");
  var siteUrl = urlParts2[0] + '//' + urlParts2[2] + '/';

  if (urlParts1[1]) {
    urlPages = urlParts1[1].split("=");
    pageTag = urlPages[0];
    pageNum = Number(urlPages[1]);
    if (pageNum) {
      if (urlPages[0] == '') {
        _showAll(pageNum);
      } else {
        _showTag(pageTag, pageNum);
      }
    } else {
      _showTag(pageTag, 1);
    }
  } else {
    _showAll(1);
  }

  function _showAll(nowPageNum) {
    $.getJSON('/json/pageList.json', function(data) {
      var maxNum;
      dataLength = data.length;
      dataLength < 6 ? maxNum = dataLength : maxNum = 6;
      var i = -1;
      _renderContent((i + nowPageNum) * 6);

      function _renderContent(Num) {
        var j, k;
        k = Num + maxNum;
        k < dataLength ? '' : k = dataLength;
        for (j = Num; j < k; j++) {
          $('#content-grid>ul').append(
            '<li>' +
            '<i class="' + data[j].tag + '"></i>' +
            '<h2>' + data[j].title + '</h2>' +
            '<h3><i class="icon-date"></i>' + data[j].date + '</h3>' +
            '<h3><i class="icon-author"></i>OXXO.STUDIO</h3>' +
            '<div class="content-img">' +
            '<span></span>' +
            '<img src="' + data[j].img + '">' +
            '</div>' +
            '<div class="content-grid-line"></div>' +
            '<h4 content="' + data[j].tag + '"></h4>' +
            '<a href="' + data[j].site + '"><div class="read-more">Read more</div></a>' +
            '</li>'
          );
          $('h4[content=' + data[j].tag + ']').load(data[j].site + ' .desc');
        }
        _h4Content();
      }
      _allPageNum(dataLength, nowPageNum);
    });
  }

  function _showTag(tagName, nowPageNum) {
    $.getJSON('/json/pageList.json', function(data) {
      var maxNum;
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
      classifyNum < 6 ? maxNum = classifyNum : maxNum = 6;
      var j = -1;
      _renderContent((j + nowPageNum) * 6);

      function _renderContent(Num) {
        var p, q;
        q = Num + maxNum;
        q < classifyNum ? '' : q = classifyNum;
        for (p = Num; p < q; p++) {
          $('#content-grid>ul').append(
            '<li>' +
            '<i class="' + classify[p].tag + '"></i>' +
            '<h2>' + classify[p].title + '</h2>' +
            '<h3><i class="icon-date"></i>' + classify[p].date + '</h3>' +
            '<h3><i class="icon-author"></i>OXXO.STUDIO</h3>' +
            '<div class="content-img">' +
            '<span></span>' +
            '<img src="' + classify[p].img + '">' +
            '</div>' +
            '<div class="content-grid-line"></div>' +
            '<h4 content="' + classify[p].tag + '"></h4>' +
            '<a href="' + classify[p].site + '"><div class="read-more">Read more</div></a>' +
            '</li>'
          );
          $('h4[content=' + classify[p].tag + ']').load(classify[p].site + ' .desc');
        }
        _h4Content();
      }
      _pageNum(classifyNum, nowPageNum);
    });
  }

  function _allPageNum(articleNum, nowPageNum) {
    var j, k;
    j = Math.ceil(articleNum / 6);
    for (k = 1; k <= j; k++) {
      $('#page-num').append(
        '<div>' + k + '</div>'
      );
    }
    $('#page-num div').hide();
    if ((nowPageNum - 3) >= 0) {
      $('#page-num div').eq(nowPageNum - 3).show();
    }
    if ((nowPageNum - 2) >= 0) {
      $('#page-num div').eq(nowPageNum - 2).show();
    }
    $('#page-num div').eq(nowPageNum - 1).show();
    $('#page-num div').eq(nowPageNum).show();
    $('#page-num div').eq(nowPageNum + 1).show();
    $('#page-num div').eq(nowPageNum + 2).show();
    $('#page-num div').eq(nowPageNum + 3).show();

    $('#page-num div').eq(nowPageNum - 1).css({
      'background': '#888',
      'color': '#fff'
    });
    $('#page-num div').on('click', function() {
      var divIndex = $(this).index() + 1;
      if (divIndex == 1) {
        window.open(siteUrl, '_self');
      } else {
        window.open(siteUrl + 'index.html?=' + divIndex, '_self');
      }
    });
  }

  function _pageNum(articleNum, nowPageNum) {
    var j, k;
    j = Math.ceil(articleNum / 6);
    for (k = 1; k <= j; k++) {
      $('#page-num').append(
        '<div>' + k + '</div>'
      );
    }
    $('#page-num div').eq(nowPageNum - 3).show();
    $('#page-num div').eq(nowPageNum - 2).show();
    $('#page-num div').eq(nowPageNum - 1).show();
    $('#page-num div').eq(nowPageNum).show();
    $('#page-num div').eq(nowPageNum + 1).show();
    $('#page-num div').eq(nowPageNum + 2).show();
    $('#page-num div').eq(nowPageNum + 3).show();

    $('#page-num div').eq(nowPageNum - 1).css({
      'background': '#888',
      'color': '#fff'
    });
    $('#page-num div').on('click', function() {
      var divIndex = $(this).index() + 1;
      if (divIndex == 1) {
        window.open(siteUrl + 'index.html?' + pageTag, '_self');
      } else {
        window.open(siteUrl + 'index.html?' + pageTag + '=' + divIndex, '_self');
      }
    });
  }

  function _h4Content() {
    $('#content-grid>ul h4').each(function() {
      var h4Content = $(this).find('.desc').text();
      if (h4Content != '') {
        var hrContent25 = h4Content.substr(0, 105);
        $(this).html(hrContent25 + '...');
      } else {
        setTimeout(_h4Content, 100);
      }
    });
  }
});
