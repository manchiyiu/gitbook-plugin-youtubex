module.exports = {

    website: {
        assets: "./assets",
        css: [
            "player.css"
        ],
        js: [
            "player.js"
        ]
    },

    blocks: {
        youtube: {
            process: function(blk) {
                return '<div class="youtubex-video" data-config=' + blk.body.trim() + '><b>Embedded Video:&nbsp;</b><a href="https://www.youtube.com/watch?v=' + blk.body + '">' + 'https://www.youtube.com/watch?v=' + blk.body + '</a> </div>';
            }
        }
    }
};
