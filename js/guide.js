$(document).ready(function(){
	var btn = $("#start-btn");
	btn.hide();
	
	$("#slider").bind("slide", function(){
		var num = mui("#slider").slider().getSlideNumber();
		if(num == 0 || num == 1){
			btn.hide();
		}else{
			btn.show();
		}
	});
	
	btn.click(function(){
		window.location.href ="html/index.html";
	});
});
