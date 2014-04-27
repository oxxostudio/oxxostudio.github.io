$(function() {
  $.getJSON('../json/pageList.json', function(data) {
  	var dataNum = data.length;
  	
      for (i = 0; i < 6; i++) {
        $('#container .new-articles .list ul').append(
          '<li>'+
          '<img src="'+data[i].img+'">'+
          '<h3>'+data[i].title+'</h3>'+
          '<span>'+data[i].desc+'</span>'+
          '</li>'
        );
      }
  });
});
