module.exports = {

    // Extend ebook resources and html
    website: {
        assets: "./book",
        css: [
            "player.css"
        ]
    },

    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% myTag %}World{% endMyTag %}"
        youtube: {
            process: function(blk) {
                return '<div class="video-container"><iframe src="https://www.youtube.com/embed/' + blk.body + '" allowfullscreen width="100%" height="100%"></iframe></div>';
            }
        }
    }
};
