import CheckMobile from './module/CheckMobile';
CheckMobile();

class Main{
    constructor(){
        this.$body = $('body');
    }

    init(){
        /*---------------------------------
         * exec
         ---------------------------------*/
        this.$body.toggleClass(window.mobile ? 'is-sp' : 'is-pc');
    }
}
var main = new Main();
main.init();
