function getLength(str) {
  //第一个参数[\x00-xff]/g 匹配单字节，加上^匹配的都是双字节
  //第二个参数把第一个参数转换成两个字母（双字符）
  return str.replace(/[^\x00-xff]/g, "xx").length;
}

function find(str,n){
  var tmp=0;
for (var i = 0; i < str.length; i++) {
  if (str.charAt(i)==n) {
tmp++
  }
}
return tmp;
}

window.onload = function() {
  //元素选取
  var ainput = document.getElementsByTagName("input");
  var oname = ainput[0];
  var pwd = ainput[1];
  var pwd2 = ainput[2];
  //选取P
  var ap = document.getElementsByTagName("p");
  var nam_p = ap[0];
  var pwd_p = ap[1];
  var pwd2_p = ap[2];
  //选取count
  var count = document.getElementById("count");
  //选取em
  var aem = document.getElementsByTagName("em");
  var name_length = 0;



  //用户名
  oname.onfocus = function() {
    nam_p.style.display = "block";
    nam_p.innerHTML = '<i class="ati"></>5-25个字符，一个汉字为两个字符,推荐使用中文会员名'
  }
  oname.onkeyup = function() {
    count.style.visibility = "visible";
    name_length = getLength(this, value)
    count.innerHTML = name_length + "个字符";
    if (name_length = 0) {
      count.style.visibility = "hidden";
    }
  }
  oname.onblur = function() {
    //数字字母不区分大小写、汉字、下划线
    //\u4e00-\u9fa5   (匹配汉字)
    var re = /[^\w\u4e00-\u9fa5]/g; //^匹配所有非法字符
    if (re.test(this.value)) {
      nam_p.innerHTML = '<i class="err"></>含有非法字符'
    } else if (this.value == "") {
      nam_p.innerHTML = '<i class="err"></>不能为空！'
    } else if (this.value > 25) {
      nam_p.innerHTML = '<i class="err"></>长度超过25个字符！'
    } else if (this.value < 6) {
      nam_p.innerHTML = '<i class="err"></>长度少于6个字符！'
    } else {
      nam_p.innerHTML = '<i class="err"></>OK！'
    }
  }

  //密码
  pwd.onfocus = function() {
    pwd.style.display = "block";
    pwd.innerHTML = '<i class="ati"></>6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号'
  }
  pwd.onkeyup = function() {
    //大于5个字符强度为中
    if (this.value.length > 5) {
      aem[1].className = "active";
      pwd2.removeAttribute("disabled");
      pwd2.style.display = "block";
    } else {
      aem[1].className = "";
      pwd2.setAttribute("disabled");
      pwd2.style.display = "none";
    }
    //大于10个字符强度为强
    if (this.value.length > 10) {
      aem[2].className = "active";
    } else {
      aem[2].className = "";
    }
  }

  pwd.onblur = function() {
    var m=find(pwd.value,pwd.value[0]);
    //匹配非数字
    var re=/[^a-zA-Z]/g;
      //匹配非字母
    var rw=/[^\d]/g;
    //不能为空
    if (this.value=="") {
pwd.innerHTML = '<i class="err"></>不能为空';
    }
    //不能用相同字符
    else if(m==this.value.length){
pwd.innerHTML = '<i class="err"></>不能用相同字符';
    }
    //长度应为6-16字符
    else if(this.value.length<6||this.value.length<16){
pwd.innerHTML = '<i class="err"></>长度应为6-16字符';
    }
//不能全为数字
    else if(!re.test(this.value)){
pwd.innerHTML = '<i class="err"></>不能全为数字';
    }
    //不能全为字母
    else if(!rw.test(this.value)){
pwd.innerHTML = '<i class="err"></>不能全为字母';
    }
    //ok
    else {
      pwd.innerHTML = '<i class="err"></>OK!';
    }
  }

  //确认密码

  pwd2.onblur = function() {
  if (this.value!=pwd.value) {
  pwd2.innerHTML = '<i class="err"></>两次输入的密码不一致!';
  }
  else {
    pwd2.innerHTML = '<i class="err"></>OK!';
  }
  }

}
