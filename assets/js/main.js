(function ($) {

  $(function () {
    // 전역변수

    var
        $wl_item = $('.wl-item'),
        $wl_image = $('.wl-image'),

        mql = window.matchMedia('screen and (max-width: 959px)');

    // Connect Event
    $wl_item.on('mouseenter', showWorkImage);
    $wl_item.on('mouseleave', hideWorkImage);

    if (mql.matches) {
      // console.log('처음에 모바일로 접속했으니까 이 이벤트를 삭제합니다.');
      $wl_item.off('mouseenter');
      $wl_item.off('mouseleave');
    }

    mql.addListener(function(e) {
      if (e.matches) {
	        // console.log('work-image가 사라집니다.');
          $wl_item.off('mouseenter');
          $wl_item.off('mouseleave');
	    } else {
	        // console.log('work-image가 나타나있습니다.');
          $wl_item.on('mouseenter', showWorkImage);
          $wl_item.on('mouseleave', hideWorkImage);
	    }
    });

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
