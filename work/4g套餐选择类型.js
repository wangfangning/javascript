//定义一个全局业务数据对象，注意不能重名，用业务相关名称命名。
var the4gChangeData = {
  allSuiteType: {
    "00": "全国套餐",
    "01": "校园套餐",
  }
};

$(document).ready(function() {
  //数据初始化
  the4gChangeData.selectSuiteType = "00";

  //视图初始化
  $("#divContainerStepConfirm").hide();

  var package_data = [
    ['0', '0元流量', '0元', '0元'],
    ['100', '100MB流量', '10元', '100元'],
    ['106', '106元套餐', '20元', '200元'],
    ['136', '136元套餐', '30元', '300元'],
    ['166', '166元套餐', '40元', '400元'],
    ['196', '196元套餐', '50元', '500元'],
    ['296', '296元套餐', '60元', '600元'],
    ['396', '396元套餐', '70元', '700元'],
    ['596', '596元套餐', '80元', '800元'],
  ];
  var array = ['0元', '40元', '510元', '60元', '70元', '80元', '90元', '100元', '110元']
  var array1 = ['10元', '40元', '50元', '60元', '70元', '80元', '90元', '100元', '110元']
  var sliderFrom = 5
  $("#package-select").ionRangeSlider({
    values: ['100MB', '120MB', '300MB', '500MB', '1G', '2G', '3G', '4G', '1G'],
    type: "single",
    grid: true,
    hide_min_max: true,
    min: 0,
    max: 8,
    from: sliderFrom,

    onStart: function(data) {

      for (var i = 0; i < array.length; i++) {
        $(".js-irs-0").find(".js-grid-text-" + i).text(array[i])
      }


    },
    onChange: function(data) {


      $('#title-price').text(package_data[data.from][0]);
      $('#tip_ll').text(package_data[data.from][3] + '流量');

    },

  });



  // $("#package-select1").ionRangeSlider({
  //           values: ['0','1100','200','300','500','1000','2000','3000'],
  //           type: "single",
  //           grid: true,
  // 	hide_min_max:true,
  //           min: 0,
  //           max: 7,
  //           from: 0,
  //           postfix: '分钟',
  // 	prettify_separator:'',
  // 	onStart:function(data)
  // 	{
  // 		for(var i=0; i< array1.length; i++)
  // 		{
  // 			$(".js-irs-1").find(".js-grid-text-"+i).text(array1[i])
  // 		}
  //
  // 	},
  //           onChange: function (data) {
  //               $('#title-price').text(package_data[data.from][0]);
  //
  // 		$('#tip_yy').text(package_data[data.from][2]+'语音');
  //           }
  //       });
  //
  //
  //
  //
  //
  // $("#package-select2").ionRangeSlider({
  //           values: ['0','200','400','600'],
  //           type: "single",
  //           grid: true,
  // 	hide_min_max:true,
  //           min: 0,
  //           max: 3,
  //           from: 0,
  //           postfix: '条',
  // 	onStart:function(data)
  // 	{
  // 		for(var i=0; i< array.length; i++)
  // 		{
  // 			$(".js-irs-2").find(".js-grid-text-"+i).text(array[i])
  // 		}
  //
  // 	},
  //           onChange: function (data) {
  //               $('#title-price').text(package_data[data.from][0]);
  //
  // 		$('#tip_yy1').text(package_data[data.from][2]+'短信');
  //           }
  //       });
  $("#package-select1").ionRangeSlider({
    values: ['0', '76', '106', '136', '166', '196', '296', '396', '596'],
    type: "single",
    grid: true,
    hide_min_max: true,
    min: 0,
    max: 8,
    from: 0,
    postfix: '元套餐',
    onChange: function(data) {
      $('#title-price').text(package_data[data.from][0]);
      $('#price-net1').text(package_data[data.from][3]);
      $('#price-mins1').text(package_data[data.from][2]);
      $('#tip_ll').text(package_data[data.from][3] + '流量');
      $('#tip_yy').text(package_data[data.from][2] + '语音');
    }
  });
  $("#package-select2").ionRangeSlider({
    values: ['0', '76', '106', '136', '166', '196', '296', '396'],
    type: "single",
    grid: true,
    hide_min_max: true,
    min: 0,
    max: 8,
    from: 0,
    postfix: '元套餐',
    onChange: function(data) {
      $('#title-price').text(package_data[data.from][0]);
      $('#price-net2').text(package_data[data.from][3]);
      $('#price-mins2').text(package_data[data.from][2]);
      $('#tip_ll').text(package_data[data.from][3] + '流量');
      $('#tip_yy').text(package_data[data.from][2] + '语音');
    }
  });
  $("#package-select3").ionRangeSlider({
    values: ['0', '76', '106', '136', '166', '196', '296', '396', '596'],
    type: "single",
    grid: true,
    hide_min_max: true,
    min: 0,
    max: 8,
    from: 0,
    postfix: '元套餐',
    onChange: function(data) {
      $('#title-price').text(package_data[data.from][0]);
      $('#price-net3').text(package_data[data.from][3]);
      $('#price-mins3').text(package_data[data.from][2]);
      $('#tip_ll').text(package_data[data.from][3] + '流量');
      $('#tip_yy').text(package_data[data.from][2] + '语音');
    }
  });
  $("#package-select4").ionRangeSlider({
    values: ['0', '76', '106', '136', '166', '196', '296', '396', '596'],
    type: "single",
    grid: true,
    hide_min_max: true,
    min: 0,
    max: 8,
    from: 0,
    postfix: '元套餐',
    onChange: function(data) {
      $('#title-price').text(package_data[data.from][0]);
      $('#price-net4').text(package_data[data.from][3]);
      $('#price-mins4').text(package_data[data.from][2]);
      $('#tip_ll').text(package_data[data.from][3] + '流量');
      $('#tip_yy').text(package_data[data.from][2] + '语音');
    }
  });
  //组合套餐
  //$('.zhtcBtnGroup>label:gt(3)').css('margin-top','10px');

  $('.zhtcBtnGroup>label').on('click', function() {
    /*	var text = $(this).text();
    	$("#zhtc").text(text);*/
    var index = $(this).index();


    if (index > 1) //非组合套餐隐藏上面的区域
    {
      $('.product-main-price').hide();
    } else if (index == 0)

    {
      $(".quanguo").show();
      $(".bendi").hide();

    } else if (index == 1) {
      $(".bendi").show();
      $(".quanguo").hide();

    }
    $("#zhtc-content > div").eq(index).show().siblings('div').hide();
  })

  $("#switchLdxs,#switchLdxs1").bootstrapSwitch();


  //开关事件
  $("#switchLdxs,#switchLdxs1").on('switchChange.bootstrapSwitch', function(event, state) {
    // console.log($(this).attr("id")); // DOM element
    //console.log(event); // jQuery event
    //console.log(state); // true | false=="switchLdxs1"
    wid = $(this).attr("id");
    showids = wid == "switchLdxs1" ? "#tip_yy2" : "#tip_yy3";
    plusJia = wid == "switchLdxs1" ? "#plusJia" : "#plusJia1";
    //console.log(showids)
    if (state == true) {
      $(showids).show();
      $(plusJia).show();
    } else {
      $(showids).hide();
      $(plusJia).hide();
    }

  });

  //套餐类型点击事件
  $("input[name=inputSuiteType]").on("click", function() {
    alert(0);
  });

  //用户协议阅读
  $(".readed").on('click', function() {
    if (this.checked == true) {
      $("#trans4gchangeSubmitBtn").addClass("abled").removeClass("disabled");
    } else {
      $("#trans4gchangeSubmitBtn").addClass("disabled").removeClass("abled");
    }
  })

  //提交，动态切换到确认页
  $("#trans4gchangeSubmitBtn").on("click", function() {

    if ($(this).hasClass('abled')) {
      switchLoadDiv("#divContainerMain", "#divContainerStepConfirm", {
        url: "/e4/transact/3gchange/steps_confirm.html",
        data: {

        },
        callback: function() {

        }
      });
    } else {
      console.info('没有abled类')
    }
  });




});


function changeState() {

  var switchLdxsval1 = $("#switchLdxs1").val();
  var switchLdxsval2 = $("#switchLdxs").val();
  console.log(switchLdxsval1 + "<br>s" + switchLdxsval2)
}
