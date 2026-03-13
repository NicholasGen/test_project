const biggerNumber = num => {
    let length = num.toString().length;
    let biggerNum = 0;
    for (let i = 0; i < length; i++) {
        d1 = Math.floor((num%(10**(i+1)))/(10**i));
        d2 = Math.floor((num%(10**(i+2)))/(10**(i+1)));
        if (i == length-1)
            continue;
        if (d1 > d2) {
            biggerNum = num + d1*10**(i+1) - d2*10**(i+1) + d2*10**(i) - d1*10**(i)
            break;
        }
    }
    biggerNum > num ? console.log(biggerNum) : console.log(-1)
}

biggerNumber(1122);
