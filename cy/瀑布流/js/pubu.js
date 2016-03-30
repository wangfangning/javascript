$(document).ready(function() {
  $(window).on('load', function() {
    imgL();
    var dataImg = {
        "data": [{
          "src": "1.jpg"
        }, {
          "src": "2.jpg"
        }, {
          "src": "3.jpg"
        }, {
          "src": "4.jpg"
        }, {
          "src": "5.jpg"
        }, {
          "src": "6.jpg"
        }, {
          "src": "7.jpg"
        }]
      }
      //鼠标滚动监听事件
    window.onscroll = function() {
      if (scrollside()) {
        $.each(dataImg.data, function(index,value) {
          var box = $("<div>").addClass('box').appendTo($("#container"));
          var content = $("<div>").addClass('content').appendTo(box);
          $("<img>").attr('src','' + $(value).attr("src")).appendTo(content);
        });
        imgL();
      }
    };
  });
});

function scrollside() {
  var box = $(".box");
  //最高图片列的高度
  var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
  var documentHeight = $(document).width();
  var scrollHeight = $(window).scrollTop();
  return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}


function imgL() {
  var box = $(".box");
  var boxWidth = box.eq(0).width();
  var num = Math.floor($(window).width() / boxWidth);
  var boxArr = [];
  box.each(function(index,value) {
    var boxHeight = box.eq(index).height();
    if (index < num) {
      boxArr[index] = boxHeight;
      //console.log(boxHeight)
    } else {
      var minboxHeight = Math.min.apply(null, boxArr);
      //最小图片位置
      var minboxIndex = $.inArray(minboxHeight, boxArr);
      $(value).css({
        "position": "absolute",
        "top": minboxHeight,
        "left": box.eq(minboxIndex).position().left
      });
      //重新计算最小图片位置的高度
      boxArr[minboxIndex] += box.eq(index).height();
    }
  });
}
