module.exports = () => {
    if(bowser.mobile || bowser.tablet){
        window.mobile = true;
    }
    else{
        window.mobile = false;
    }
};
