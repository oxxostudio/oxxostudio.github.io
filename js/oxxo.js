$(function() {
  var $window = $(window),
    contentWidth = function() {
      $('#content').css({
        'width': ($window.width() - $('#sideNav').width() - $('#subMenu').width()) + 'px'
      });
      $('#content').text('width:' + $('#content').width() + 'px');
    };
  contentWidth();
  $window.resize(contentWidth);

  $.getJSON('../pageList.json', function(data) {
  	var dataNum = data.length;
  	
      for (i = 0; i < dataNum; i++) {
        $('#subMenu ul').append(
          '<li>'+data[i].Title+' -'+data[i].date+'</li>'
        );
      }
  });


});
