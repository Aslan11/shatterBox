
$(document).ready(function(){
	var numShards = $('.shard').length;
	
	if(navigator.userAgent.indexOf("Firefox") != -1 ){
		$('.shard').css({"margin":"-2.05px"});
	}
	
	$('.shatterTrigger').hover(function(){
		$('.shard').addClass('active');
		$('.shatterCaption').addClass("visible");
		$('.shatterHeader').addClass("visible");
		for (var i=1; i < numShards; i++){
		var randNum = Math.floor((Math.random() * 7) + 3);
		$('.shard:nth-child('+i+')').css({"transition":"background ."+randNum+"s, transform ."+randNum+"s","-webkit-transition":"background ."+randNum+"s, -webkit-transform ."+randNum+"s"});
		console.log(i);
		console.log(randNum);
	
	}
						
	})
	$('.shatterTrigger').mouseout(function(){
		$('.shard').removeClass('active');	
		$('.shatterCaption').removeClass("visible");
		$('.shatterHeader').removeClass("visible");		
	})
	
});
