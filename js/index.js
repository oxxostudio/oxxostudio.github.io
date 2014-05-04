$(function() {
    var $window = $(window);
    var imgWidth, imgHeight, imgWidthMargin, imgHeightMargin;

    $.getJSON('/json/pageList.json', function(data) {
        var i;
        for (i = 0; i < 6; i++) {
            $('#container .new-articles .list ul').append(
                '<li title="'+data[i].title+'">'+
                '<a href="'+data[i].site+'">' +
                '<div class="img-div">' +
                '<div>'+data[i].desc+'</div>'+
                '<img src="' + data[i].img + '">' +
                '</div>' +
                '<h3>' + data[i].title +'</h3>' +
                '<span>' + data[i].date + 
                '<h5 class="new-'+data[i].type+'">'+data[i].type+'</h5>'+
                '</span>' +
                '</a>'+
                '</li>'
            );
            if (i == 5) {
                fn_listHeight();
            }
        }
    });

    function fn_listHeight() {
        imgWidth = $('.new-articles .list .img-div').width();
        imgHeight = Math.round(imgWidth * 26 / 29);
        imgWidthMargin = imgWidth * 0.05;
        imgHeightMargin = imgHeight * 0.05;
        $('.new-articles .list ul li .img-div').css({
            'height': imgHeight + 'px'
        });
    }

    $window.resize(function() {
        fn_listHeight();
    });
});
