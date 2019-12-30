$(document).ready(function(e){
	$("#genIdCode").click(function(e){
		
	});
	$("#getIdCode").click(function(e){
		
	});
	$("#eye-span").click(function(){
		var pswbox = $("#pswbox");
		var pswtype = pswbox.attr("type");
		if(pswtype == "password"){
			pswbox.attr("type","text");
			$(this).css("color","rgba(19,91,162,1)");
		}else{
			pswbox.attr("type","password");
			$(this).css("color","rgba(19,91,162,0.3)");
		}
	});
	$("input[type=checkbox]").click(function(){
		var regbtn = $("#reg-btn");
		if(this.checked){
			regbtn.attr("disabled",false);
		}else{
			regbtn.attr("disabled",true);
		}
	});
	$("#reg-btn").click(function(){
		var regdata = new FormData();
		
		var mobilebox = $("#mobilebox");
		var mobile = mobilebox.val();
		mobile = mobile.trim();//去掉字符串首位空格
		if(mobile == "" || mobile == null || mobile == undefined){
			alert("手机号码不能为空，请重新输入");
			mobilebox.focus();//手机输入框获取焦点
			return;
		}
		regdata.append("mobile", mobile);
		
		var yzmbox = $("#yzmbox");
		var yzm = yzmbox.val();
		yzm = yzm.trim();//去掉字符串首位空格
		if(yzm == "" || yzm == null || yzm == undefined){
			alert("验证码输入出错，请重新输入");
			yzmbox.focus();//验证码输入框获取焦点
			return;
		}
		regdata.append("yzm", yzm);
		
		var dxyzmbox = $("#dxyzmbox");
		var dxyzm = dxyzmbox.val();
		dxyzm = dxyzm.trim();//去掉字符串首位空格
		if(dxyzm == "" || dxyzm == null || dxyzm == undefined){
			alert("短信验证码输入出错，请重新输入");
			dxyzmbox.focus();//短信验证码输入框获取焦点
			return;
		}
		regdata.append("dxyzm", dxyzm);
		
		var pswbox = $("#pswbox");
		var psw = pswbox.val();
		psw = psw.trim();//去掉字符串首位空格
		if(psw == "" || psw == null || psw == undefined){
			alert("密码不能为空，请重新输入");
			pswbox.focus();//密码输入框获取焦点
			return;
		}
		regdata.append("psw", psw);
		
		
	});
});
