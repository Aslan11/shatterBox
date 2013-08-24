
$(document).ready(function(){
	$('.shatterTrigger').hover(function(){
		$('.shard').addClass('active');
		$('.shatterCaption').addClass("visible");
		$('.shatterHeader').addClass("visible");				
	})
	$('.shatterTrigger').mouseout(function(){
		$('.shard').removeClass('active');	
		$('.shatterCaption').removeClass("visible");
		$('.shatterHeader').removeClass("visible");		
	})
	
	var numShards = $('.shard').length
	
	for (var i=1; i < numShards; i++){
		var randNum = Math.floor((Math.random() * 9) + 1);
		$('.shardContainer:nth-child('+i+')').css({"transition":"background ."+ randNum +"s, transform ."+ randNum +"s","-webkit-transition":"background ."+ randNum +"s, -webkit-transform ."+ randNum +"s"});
		console.log(i);
		console.log(randNum);
	
	}
	
});
