/**
 * Created by Administrator on 2016/8/4.
 */

$(function(){

    $("#nav_topic li").bind("click",function(){
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    })
    //������Ʒ��ר����ܵ�tab�л�
    $("#tab_nav span").bind("click",function(){
        $(this).addClass("on_tab_topic").siblings("span").removeClass();
        $("#tab_con .tab_content").hide().eq($('#tab_nav span').index(this)).show();
    });

    function scales($id){
        $id.bind("mouseenter",function(){
            $(this).animate({width:'+=10px',height:'+=10px'},300);
        });
        $id.bind("mouseleave",function(){
            $(this).animate({width:'-=10px',height:'-=10px'},300);
        });

    }
    scales($(".photo_pro img"));
    scales($(".right2 img"));
});

