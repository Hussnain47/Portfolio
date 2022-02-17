$(window).scroll(function () {
  if ($(window).scrollTop() <= 0) {
    if ($("#Navbar").hasClass("scrolled-down")) {
      $("#Navbar").removeClass("scrolled-down");
    }
  } else {
    if (!$("#Navbar").hasClass("scrolled-down")) {
      $("#Navbar").addClass("scrolled-down");
    }
  }
});

$(window).on("scroll", check_if_in_view);

function check_if_in_view() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = window_top_position + window_height;
  $.each($(".from-left"), function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("appear-in");
    } else {
      $element.removeClass("appear-in");
    }
  });
  $.each($(".from-right"), function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;
    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("appear-in");
    } else {
      $element.removeClass("appear-in");
    }
  });
  $.each($(".fade-in"), function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;
    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("appear-in");
    } else {
      $element.removeClass("appear-in");
    }
  });
}
check_if_in_view();
