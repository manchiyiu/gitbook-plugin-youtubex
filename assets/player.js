var loadYouTube = function() {
	$("div.youtubex-video").each(function() {
		$(this).removeClass('youtubex-video').addClass('youtubex-container');
    	$(this).html('<iframe src="https://www.youtube.com/embed/' + $(this).data('config') + '" allowfullscreen width="100%" height="100%"></iframe>')
	});
}

require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        loadYouTube();
    });
});