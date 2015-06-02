$(document).ready(function(){

	$("div.video-container").each(function() {
     	$(this).html('<iframe src="https://www.youtube.com/embed/' + $(this).data('config').id + '" allowfullscreen width="100%" height="100%"></iframe>')
}	);

});