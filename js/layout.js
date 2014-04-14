$(function() {
  var $wrapper = $('#wrapper');
  var $container = $('#container');
  var containerWidth;
  var $containerWidth = function() {
    containerWidth = Math.round($wrapper.width()) - 230;
    $container.css({
      'width': containerWidth + 'px'
    });
  }
  $containerWidth();
  $(window).resize($containerWidth);
});
