
/*function orient() {
	if (window.orientation == 90 || window.orientation == -90) {
		//ipad、iphone竖屏；Andriod横屏
		window.location.reload();
		return false;
	}else if (window.orientation == 0 || window.orientation == 180) {
		//ipad、iphone横屏；Andriod竖屏
		window.location.reload();
		return false;
		}
	}
	//页面加载时调用
 
	$(window).bind( 'orientationchange', function(e){
		orient();
	});
*/

	//如果校验成功点击确定调用此函数
	function turn(){
				$(".mengceng").hide();
				$(".wbPop").hide();
				$("html,body").css({"overflow":"visible"});
				$("html,body").height("auto");
		 window.location = "dazhanpan.htm"  
	}


        $(function(){
			$(".middle img").eq(1).hide();
			/*关闭弹层*/
			$(".mc_cls").click(function(){
				$(".mengceng").hide();
				$(this).parent(".wbPop").hide();
				$("html,body").css({"overflow":"visible"});
				$("html,body").height("auto");
			})


			$(".wbInp").focus(function(){
				if($(this).val() ==this.defaultValue){
					$(this).val("");
				}
			}).blur(function(){
				if ($(this).val() == '') {
					$(this).val(this.defaultValue);
				}
			})

			/*手机号验证*/
			var phone_flag = true; //开发判断是否为联通号码
			$("#phoneNumber").blur(function(){
			 
				var text = $(this).val();
				 console.log(isNaN(text))
			 if(!isNaN(text)){

				if(phone_flag==true && text.length==11)
				{
				
					$(".confirm img").attr("src","images/qr.png") ;
					$(".error_tip").hide();
				}
				else
				{
					$(".confirm img").attr("src","images/qr1.png") ;
					$(".error_tip").show();
				}
			  }
			})


			/*倒计时验证码*/

		$('.yzm4 img.yzm_png1').bind("click",myFun = function(){
				var st = null
			clearInterval(st);
				var miao = $('.yzm4 p').find( 'em' ),
					i = 59;
					miao.html( i );	
					$('.yzm4 img').unbind('click',myFun);
					$('.yzm_png1').attr("src","images/wb7.png")
				 st = setInterval(function(){		
					i--;
					miao.html( i );	
					if( i == 0){
						clearInterval(st);
						$('.yzm4 img').bind("click",myFun);
						$('.yzm_png1').attr("src","images/wb6.png")
					}
				},1000)
		})
		

		

        })
		window.onload=function(){

			$('.monkey').addClass('ctt');
			setTimeout(ccc,1000);
			setTimeout(ccc1,2000);
			setTimeout(time,2000);
			setTimeout(join,2500);
		}
		function time(){$('.time').css('left','0px')}
		function ccc(){
			$('.cc').addClass('shake-slow');
		}
		function ccc1(){
			$('.cc').removeClass('shake-slow');
		}

		function join(){
			$('.join').addClass('swing');
		}
 
//蒙层
 function mengceng(){
				$('.mengceng').height($(window).height());
					$('.mengceng').show();
					$('.phone').show();
					$("html,body").css({"overflow":"hidden"});
					 
					$(".mengceng,html,body").height($(window).height()+100);
 
 }
 