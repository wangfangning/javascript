$(document).ready(function() {
  //获取地址栏地址及分割个数
var index= window.location.href.split("/").length-1;
    //获取地址栏最后一个地址
var href=window.location.href.split("/")[index].substr(0,4);

 //if (href>0) {
 $(".list li a[href^='"+href+"']").addClass('on')
// }else{
// $(".list li a[href^='inde']").addClass('on')
 //}

});
