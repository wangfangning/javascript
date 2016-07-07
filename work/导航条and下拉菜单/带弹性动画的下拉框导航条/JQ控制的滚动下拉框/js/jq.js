$(document).ready(function() {
  $(".nav .list li").hover(function() {
    $(this).find(".down").stop().slideDown();
  }, function() {
    $(this).find(".down").stop().slideUp();
  });
});
