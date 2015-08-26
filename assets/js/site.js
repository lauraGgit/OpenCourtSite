$(document).ready(function(){

	$(".img-toggle").click(function(e){
		e.preventDefault();
		$( this ).parents('.gallery-image').css({'background-image':"url('assets/img/"+$(this).data("image")+"')",
												  'background-color':$(this).data("color")});
	});
});