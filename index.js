module.exports = {

    website: {
        assets: "./assets",
        js: [
            "player.js"
        ],
        css: [
            "player.css"
        ]
    },

    blocks: {
        youtube: {
            process: function(blk) {
                var vid = blk.body.trim();

                if(vid.length === 0) {
                  console.log('\n[gitbook-plugin-youtubex]('+this.ctx.file.path+') Error: video ID is empty.');
                  return null;
                }

                if(vid.indexOf("'") > -1 || vid.indexOf('"') > -1) {
                  console.log('\n[gitbook-plugin-youtubex]('+this.ctx.file.path+') Error: input ID contains invalid character(s).');
                  return null;
                }

                if(this.generator === 'website') {
                    var html = [];
                    html.push('<div class="youtubexDiv">');
                    html.push('   <div class="youtubex" id="' + vid + '" />');
                    html.push('</div>');
                    return html.join('');
                } else
                    return '<blockquote><b>Embedded Video:<b>&nbsp;<a href="https://www.youtube.com/watch?v=' + vid + '">' + 'https://www.youtube.com/watch?v=' + vid + '</a></blockquote>';
            }
        },
        m: {
            process: function(blk) {
                var id = blk.kwargs.id.trim();
                var h = blk.kwargs.h || 0;
                var m = blk.kwargs.m || 0;
                var s = blk.kwargs.s || 0;

                var time = h * 3600 + m * 60 + s;
                var timeString = '';
                timeString += (h !== 0)? (h < 10? '0'+h: h) + ':': '';
                timeString += (m !== 0)? (m < 10? '0'+m: m) + ':': '';
                timeString += (s < 10? '0'+s: s);

                return '<a href="#" class="skip_' + id + '" data-time="' + time + '">' + timeString + '</a>';
            }
        }
    }
};
