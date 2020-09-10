$(document).ready(function(){ 
	$('.projects .item').each(function(e){
		var thumb = $(this).data('thumbnail');
		$(this).hover(
			function(e){
				// $(this).css('cursor','👉');
			}, function(e){
				
			}
		);
		
	});
});