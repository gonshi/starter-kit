const PATH = './audio';

module.exports = class Sound{
    constructor(){
        boombox.setup();
        boombox.visibilityChange = new Function();
        //boombox.onFocus = new Function();
        boombox.onPageShow = new Function();
        boombox.onBlur = new Function();
        boombox.onPageHide = new Function();
    }

    preload(id, _callback){
        let callback = _callback || new Function();

        boombox.load(id, {
            src: [
                {
                    media: 'audio/mp3',
                    path: `${PATH}/${id}.mp3`,
                }
            ],
        }, callback);

        boombox.get(id).volume(0);
        boombox.get(id).play();
    };

    play(id, _callback){
        let callback = _callback || new Function();
        this.checkPreload(id);

        boombox.get(id).volume(1);
        boombox.get(id).replay();
        boombox.get(id).onEnded = callback;
    }

    checkPreload(id){
        if(!boombox.get(id)) this.preload(id);
    }
}
