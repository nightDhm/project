$(document).ready(function(){
	$(".txt").fadeIn(2000);
	$("#btn-reg").click(function(){
		$(".txt").fadeOut(2000,function(){
			window.location.href = "../html/reg.html";
		});
	});
	$("#btn-login").click(function(){
		window.location.href = "../html/login.html";
	});
	
	var startY, Y;
	$("body").on("touchstart",function(e){
		startY = e.originalEvent.changedTouches[0].pageY;
	});
	
	$("body").on("touchmove",function(e){
		
	});
	
	$("body").on("touchend",function(e){
		var endY = e.originalEvent.changedTouches[0].pageY;
		Y = endY - startY;
		if(Y < -10){
			var r = Math.random() * 255;
			var g = Math.random() * 255;
			var b = Math.random() * 255;
			
			$(".blue-empty").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
		}
	});
	
	$(".logo").click(function(){
		if($(".txt").is(":hidden")){
			$(".txt").show();
		}else{
			$(".txt").hide();
		}
	});
	
	$(".logo").hide();
	$(".logo").fadeIn(2000);
});

