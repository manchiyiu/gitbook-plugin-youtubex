var loadYouTube = function() {
	$("div.video").each(function() {
		$(this).removeClass('video').addClass('video-container');
    	$(this).html('<iframe src="https://www.youtube.com/embed/' + $(this).data('config').id + '" allowfullscreen width="100%" height="100%"></iframe>')
	});
}


require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        loadYouTube();
    });

  	$(document).ready(function(){
  		loadYouTube();
  	});
});