window.limitedDebug = (text) => {
    if(typeof window.debug_count === 'undefined') window.debug_count = 0;

    //if(window.debug_count < 1000){
    if(Math.random() < 0.01){
        console.log(text);
        window.debug_count += 1;
    }
};

window.shuffle = (array) => {
    let length = array.length;
    let a;
    let b;

    while(length){
        b = Math.floor(Math.random() * length--);
        a = array[length];
        array[length] = array[b];
        array[b] = a;
    }

    return array;
};
