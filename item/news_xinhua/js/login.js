$(function(){
    $(".user_zh_mes").click(function(){
      var _val=$(this).val();
      if(_val=="请输入手机号码"){
        $(this).val("");
      }
    }).blur(function(){
      var _val=$(this).val();
      if(_val==""){
        $(this).val("请输入手机号码");
      }
    })
    $(".user_mm_mes").click(function(){
      var _val=$(this).val();
      if(_val=="请输入密码"){
        $(this).val("");
      }
    }).blur(function(){
      var _val=$(this).val();
      if(_val==""){
        $(this).val("请输入密码");
      }
    })
    $(".login_style li").click(function(){
      $(".login_style li").removeClass("login_active_1");
      $(this).addClass("login_active_1");
    })

    $(".login_bt").click(function(){
      window.location.href="index.html";
    })
})
