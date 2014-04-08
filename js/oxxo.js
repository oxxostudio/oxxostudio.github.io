$(function() {
  $.getJSON('../pageList.json', function(data) {
  	var dataNum = data.length;
  	
      for (i = 0; i < dataNum; i++) {
        $('#subMenu ul').append(
          '<li>'+data[i].Title+' -'+data[i].date+'</li>'
        );
      }
  });


});
