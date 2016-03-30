$(document).ready(function() {
  $(".list a").hover(function() {
    $(this).stop().animate({"margin-top":-40}, 300)
  }, function() {
    $(this).stop().animate({"margin-top":0}, 300)
  });
});
