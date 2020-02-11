$(document).ready(function(){ 
	$(document).on('click', function(e){
		$('aside').css({"transform":"translateX(90%)"});
	});
	$('aside').on('click', function(e){
		$(this).css({"transform":"translateX(0%)"});
		e.stopPropagation();
	});
});