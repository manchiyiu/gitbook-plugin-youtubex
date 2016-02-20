window.onYouTubeIframeAPIReady = function() {
    $('.youtubex').each(function() {
        id = $(this).attr('id');
        var player = new YT.Player(id, {
            height: '100%',
            width: '100%',
            playerVars: {
                'controls': 1,
                'autoplay': 0,
                'modestbranding': 1,
                'rel': 0
            },
            videoId: id,
            events: {
                'onReady': function(event) {
                }
            }
        });

        $('.skip_'+id).click(function() {
            var time = $(this).data('time');
            player.seekTo(time, true);
        });
    });
};

require(["gitbook", "jquery"], function(gitbook, $) {

    function init() {
        $.getScript("https://www.youtube.com/iframe_api")
            .done(function(){
                window.onYouTubeIframeAPIReady();
            });
    }

    gitbook.events.bind("page.change", init);
});
