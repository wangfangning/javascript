$(function(){

  // 导航部分


  $(".nav_2_zhl li a").click(function(){
    var id=$(this).attr("id");
    var _this_w=$(this).width();
    $(".active2_pic").remove();

    $(".nav_3_zhl").addClass("dn");
    $("#"+id+"_nr").removeClass("dn");
    $(".nav_2_zhl li a").removeClass("active2").next().addClass("dn");
    $(this).addClass("active2").next().removeClass("dn");
    if(id==""){
      $(".nav_3_warp ").addClass("dn");
    }else{
      var xsj="<p class='active2_pic' style='width:"+_this_w+"px'><img src='images/sjt.png'/></p>";
      $(".active2_pic").width(_this_w);
      $(this).parent().append(xsj);
      $(".nav_3_warp ").removeClass("dn");
    }
  })

$(".nav_2_zhl li").each(function(){
  var this_width=$(this).width();
  $(this).children().last().width(""+this_width+"px");
})


// 三级导航左右滑动
$(".nav_3_left").click(function(){
  var length=$(".nav_2_zhl li").length;
  for(i=0;i<length;i++){
    var _this=$(".nav_2_zhl li").eq(i).children();
    if(_this.hasClass("active2")){
      var nav_2_id=_this.attr("id");

      var nav_2_w=$("#"+nav_2_id+"_nr").width();

      if(nav_2_w>1000){
        var _left=$("#"+nav_2_id+"_nr").css("left");
        _left=-(-(parseInt(_left.substring(0,_left.length-2)))-1000);
        // 判断是否滚动到了最后一部分
        if(-_left>=0){
            $("#"+nav_2_id+"_nr").animate({"left":""+_left+"px"},400);
        }
      }
      break;
    }
  }
})


$(".nav_3_zhl li").mouseover(function(){
  $(".nav").css("z-index","5");
}).mouseout(function(){
  $(".nav").css("z-index","2");
})


$(".nav_3_right").click(function(){
  var length=$(".nav_2_zhl li").length;
  for(i=0;i<length;i++){
    var _this=$(".nav_2_zhl li").eq(i).children();
    if(_this.hasClass("active2")){
      // 获取当前二级导航id
      var nav_2_id=_this.attr("id");
      // 获取当前三级导航的宽度
      var nav_2_w=$("#"+nav_2_id+"_nr").width();
      // 判断宽度是否超过1000，超过1000可以向左滚动
      if(nav_2_w>1000){
        var _left=$("#"+nav_2_id+"_nr").css("left");
        _left=-(-(parseInt(_left.substring(0,_left.length-2)))+1000);
        // 判断是否滚动到了最后一部分
        if(nav_2_w>-_left){
            $("#"+nav_2_id+"_nr").animate({"left":""+_left+"px"},400);
        }


      }
      break;
    }
  }
})
// $(".nav_3_zhl").each(function(){
//   var id=$(this).attr("id");
//   nav_3_zhl_width(id);
// })
//
// function nav_3_zhl_width(id){
//   var dome_w=0;
//   $("#"+id+">li").each(function(){
//     var this_width=$(this).width();
//       dome_w+=this_width+28;
//   })
//
//   $("#"+id+"").width(dome_w);
// }



  // 页码点击
  $(".page_num").click(function(){
    $(".page_num").removeClass("active_page");
    $(this).addClass("active_page");
  })

  // 左右翻页
  $(".page_left").click(function(){
    var num1=$(".page_num").eq(0).text();
    if(num1!=1){
      $(".page_num").each(function(){
        var num2=parseInt($(this).text());
        $(this).text(num2-1);
      })
    }
  })
  $(".page_right").click(function(){
    var num1=$(".page_num").eq(4).text();
    var num2=$(".page_nums").text();
    if(num1!=num2&&num1<num2){
      $(".page_num").each(function(){
        var num3=parseInt($(this).text());
        $(this).text(num3+1);
      })
    }
  })

  $(".news_img1").mouseover(function(){
      $(this).children().find("img").animate({
        "width":"255px",
        "height":"195px",
        "top":"-10px",
        "left":"-10px"
      },500)
  }).mouseout(function(){
      $(this).children().find("img").stop(true).animate({
        "width":"225px",
        "height":"175px",
        "top":"-0",
        "left":"0"
      },10)
  })
  var cont_li_length=$(".content_mes_zhl li").length;
  for(i=0;i<cont_li_length;i++){
    if(i%5==4){
      $(".content_mes_zhl li").eq(i).css("margin-right","0");
    }
  }

// 选择分页
  $(".page_one_num").click(function(){
    $(".page_one_num_xz").toggle();
    var old_val=$(".page_one_num_val").text();
    $(".page_one_num_xz li").each(function(){
      var val=$(this).text();
      if(old_val==val){
        $(this).addClass("active_num_xz");
      }
    })
  })

  // 鼠标滑过分页数量选择
  $(".page_one_num_xz li").mouseover(function(){
    $(".page_one_num_xz li").removeClass("active_num_xz");
    $(this).addClass("active_num_xz");
  })

// 分页数量选择
  $(".page_one_num_xz li").click(function(){
    var num_text=$(this).text();
    $(".page_one_num_val").text(num_text);
    $(".page_one_num_xz").hide();
    $(".page_one_num_xz li").removeClass("active_num_xz");
    var val=parseInt($(this).attr("id"));
    var num_all=parseInt($(".news_all_num").text());
    var nums=Math.ceil(num_all/val);
    $(".page_nums").text(nums);
  })




})
