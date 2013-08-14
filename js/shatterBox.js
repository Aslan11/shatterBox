
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
	
});
