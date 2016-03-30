$(document).ready(function() {
  $(".nav .list li").hover(function() {
    $(this).find(".down").stop().slideDown({duration:800,easing:"easeOutBounce"});
  }, function() {
    $(this).find(".down").stop().slideUp({duration:800,easing:"easeOutBounce"});
  });
});
