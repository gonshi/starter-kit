const POPUP_WIDTH = 650;
const POPUP_HEIGHT = 450;

module.exports = class Opener{
    constructor(){
        this.$win = $(window);
        const DEBOUNCE_SPAN = 200;
        let dualScreenLeft;
        let dualScreenTop;
        let windowWidth;
        let windowHeight;

        const RESIZE_EVENT = () => {
            if(typeof window.screenLeft !== 'undefined'){
                dualScreenLeft = window.screenLeft;
                dualScreenTop = window.screenTop;
            }
            else{
                dualScreenLeft = window.screen.left;
                dualScreenTop = window.screen.top;
            }

            if(typeof window.innerWidth !== 'undefined'){
                windowWidth = window.innerWidth;
                windowHeight = window.innerHeight;
            }
            else if(typeof document.documentElement !== 'undefined' &&
                    typeof document.documentElement.clientWidth !== 'undefined'){
                windowWidth = document.documentElement.clientWidth;
                windowWidth = document.documentElement.clientHeight;
            }
            else{
                windowWidth = window.screen.width;
                windowWidth = window.screen.height;
            }

            this.offset_left = ((windowWidth / 2) - (POPUP_WIDTH / 2)) + dualScreenLeft;
            this.offset_top = ((windowHeight / 2) - (POPUP_HEIGHT / 2)) + dualScreenTop;
        };

        /*---------------------------------
         * listen
         ---------------------------------*/
        this.$win.on('resize.opener', () => {
            RESIZE_EVENT();
        });

        /*---------------------------------
         * exec
         ---------------------------------*/
        this.$win.trigger('resize.opener');
    }

    open(args){
        window.open(
            args.url, args.title,
            `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, top=${this.offset_top}, left=${this.offset_left}`
        );
    }
}
