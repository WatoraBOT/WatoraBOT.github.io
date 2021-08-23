jQuery(document).ready(function($) {
  // Remove url text on mouseover for icons links
  $('a').each(function() {
    $(this).attr('onclick', 'window.location.href="' + $(this).attr('href') + '"');
    $(this).removeAttr('href');
  });
});


jQuery(document).ready(function($) {
  /**
   * Set footer always on the bottom of the page
   */
  function footerAlwayInBottom(footerSelector) {
    var docHeight = $(window).height();
    var footerTop = footerSelector.position().top + footerSelector.height();
    if (footerTop < docHeight) {
      footerSelector.css("margin-top", (docHeight - footerTop) + "px");
    } else {
      footerSelector.css('margin-top', '0px');
    }
  }
  // Apply when page is loading
  footerAlwayInBottom($("#footer"));

  // Apply when page is fully loaded
  $(window).on("load", function() {
    footerAlwayInBottom($("#footer"));
    $(window).trigger('resize');
  });

  // Apply when page is resizing
  $(window).resize(function() {
    footerAlwayInBottom($("#footer"));
  });

  // Apply every 25 ms
  window.setInterval(function() {
    footerAlwayInBottom($("#footer"));
  }, 25);

});
