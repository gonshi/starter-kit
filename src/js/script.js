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

        if(window.mobile){
            this.$body.addClass('is-sp')
        }
        else{
            this.$body.addClass('is-pc')
        }
    }
}
var main = new Main();
main.init();
