module.exports = {

    // Extend ebook resources and html
    website: {
        assets: "./book",
        css: [
            "player.css"
        ],
        js: [
            "player.js"
        ]
    },

    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% myTag %}World{% endMyTag %}"
        youtube: {
            process: function(blk) {

                var obj = {id: blk.body};
                return '<div class="video" data-config=' + JSON.stringify(obj) + '><b>Embedded video:</b>  <a href="https://www.youtube.com/watch?v=' + blk.body + '">' + 'https://www.youtube.com/watch?v=' + blk.body + '</a> </div>';
            }
        }
    }
};
