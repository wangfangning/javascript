$(document).ready(function() {
  var index = window.location.href.split("/").length - 1;
  var href = window.location.href.split("/")[index].substr(0, 4);

  $(".nav_on li a[href^='" + href + "']").addClass('on')
  var li_width = $(".nav_on li a.on").outerWidth();
  var li_left = $(".nav_on li a.on").position().left;
  $(".nav_on .line").css({
    width: li_width,left:li_left
  })
  $(".nav_on li").hover(function() {
    var li_width = $(this).outerWidth();
    var li_left = $(this).position().left;
    $(".nav_on li a.on").position().left;
    $(".nav_on .line").stop().animate({
      width: li_width,left:li_left
    },{duration:1500,easing:"easeOutElastic"})
  }, function() {
    $(".nav_on .line").stop().animate({
      width: li_width,left:li_left
    },{duration:1500,easing:"easeOutElastic"})
  });
});
