module.exports = class GetData{
    constructor(){
    }

    exec(args){
        let src = `https://spreadsheets.google.com/feeds/list/${args.id}/od6/public/basic?alt=json-in-script`;

        const EXP = [
            /(first): ([\s\S]*?)(,|$)/,
        ];

        let data = [];

        window.gdata = {}
        window.gdata.io = {}
        window.gdata.io.handleScriptLoaded = (response) => {
            for(let i = 0; i < response.feed.entry.length; i++){
                data[i] = {};

                for(let exp_i = 0; exp_i < EXP.length; exp_i++){
                    if(response.feed.entry[i].content.$t.match(EXP[exp_i])){
                        let match = response.feed.entry[i].content.$t.match(EXP[exp_i]);
                        data[i][match[1]] = match[2];
                    }
                }

                data[i].title = response.feed.entry[i].title.$t;
            }

            args.callback(data);
        };

        $('head').append($('<script>').attr({src: src}));
    }
}
