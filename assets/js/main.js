(function ($) {

  $(function () {
    // 전역변수
    var
        $wl_item = $('.wl-item'),
        $wl_image = $('.wl-image');

    // Connect Event
    $wl_item.on('mouseenter', showWorkImage);
    $wl_item.on('mouseleave', hideWorkImage);

    // Event Handler
    function showWorkImage(e) {
      e.stopPropagation();
      var $wl_image, url;
      $wl_image = $(this).children('.wl-image');
      url = $wl_image.data('url');
      $wl_image.css('backgroundImage', 'url(' + url + ')');
      $wl_image.fadeIn(200);
    }

    function hideWorkImage() {
      $wl_image.css('backgroundImage', 'none');
      $wl_image.hide();
    }
  });

})(window.jQuery);
