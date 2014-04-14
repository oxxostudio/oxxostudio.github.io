$(function() {
  $.getJSON('../pageList.json', function(data) {
  	var dataNum = data.length;
  	
      for (i = 0; i < dataNum; i++) {
        $('#container').append(
          data[i].Title+' -'+data[i].date+'</br>'
        );
      }
  });
});
