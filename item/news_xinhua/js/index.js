/**
 * Created by Administrator on 2016/8/3.
 */
$(function(){
    //导航悬浮

    $("#xinxi").bind("mouseenter",function(){
        $(this).addClass("on").siblings("li").removeClass("on");
        $("#nav_blocks .nav_block").show();
    });
    $("#xinxi").bind("mouseleave",function(){
        $(this).removeClass("on");
        $("#nav_blocks .nav_block").hide();
    })
    //
    $("#nav_blocks").on("mouseenter",".nav_block", function () {
        $(this).show();
        $("#xinxi").addClass("on");
    }).on("mouseleave",".nav_block", function () {
        $(this).hide();
        $("#xinxi").removeClass("on");
    });


    //鼠标悬浮图片放大
    $("#parts_ul li .news_img").bind("mouseenter",function(){
        $(this).animate({width:'+=10px',height:'+=10px'},300);
    });
    $("#parts_ul li .news_img").bind("mouseleave",function(){
        $(this).animate({width:'-=10px',height:'-=10px'},300);
    });

});



// JavaScript Document
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, false)[attr];
    }
}


function startMove(obj, json, fn) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (attr in json) {
            //
            if (attr == 'opacity') {
                var iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                var iCur = parseInt(getStyle(obj, attr));
            }
            //
            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed);

            //
            if (iCur == json[attr]) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            } else {
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + parseInt(iCur + iSpeed) + ')';
                    obj.style.opacity = (iCur + iSpeed) / 100;
                } else {
                    obj.style[attr] = (iCur + iSpeed) + 'px';
                }
            }
        }
    }, 30);
}

//ԭ


var oUL;
var oLIs;
var oNavlist;
var currentIndex=0;
/*-文字对应的数组*/
var textArr = ["习近平提高党的新闻舆论专题","石狮港口经济交出“漂亮成绩单”","21世纪祖国发展新貌专题"];
window.onload = function(){
    oUL = $('.img-list')[0];
    oLIs = oUL.children;
    oNavlist = $('.banner-nav-list')[0].children;
    banner(); //
}

function banner(){
    currentIndex = 0;
    $(".text").html(textArr[0]);
    var newli = oLIs[0].cloneNode(true);
    oUL.appendChild(newli);
    oUL.style.width = oLIs.length*oLIs[0].offsetWidth + "px";

    for(var i=0; i<oNavlist.length; i++){
        oNavlist[i].index = i;
        oNavlist[i].onclick = function(){
            clearInterval(timer);
            startMove(oUL, {left: this.index * -oLIs[0].offsetWidth});
            for(var i=0;i<oNavlist.length;i++){
                oNavlist[i].className = "";
            }
            this.className = "active";
            currentIndex = this.index+1;
            timer = setInterval(move,3000);
        }
    }

    var timer = setInterval(move,3000);

    function move(){
        if(currentIndex == 3){
            oUL.style.left = 0;
            currentIndex = 0;
        }
        //
        startMove(oUL, {left: currentIndex * -oLIs[0].offsetWidth});
        //显示文字
        $(".text").html(textArr[currentIndex]);
        for(var i=0;i<oNavlist.length;i++){
            oNavlist[i].className = "";
        }
        oNavlist[currentIndex>=3 ? 0 : currentIndex].className = "active";
        currentIndex++;
    }
}
