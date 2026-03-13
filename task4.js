const orderNumber = numberList => {
    let numArray = [];
    let temp = [];
    for (let i = 0; i < numberList.length; i++ ) {
        if (numberList[i] == numberList[i-1] + 1) {
            temp.push(numberList[i]);
            if (i == numberList.length - 1)
                numArray.push(temp);
        }
        else {
            if (i != 0)
                numArray.push(temp);
            temp = [];
            temp.push(numberList[i])
            if (i == numberList.length - 1)
                numArray.push(temp);
        }        
    }
    
    let strArray = [];
    numArray.forEach(element => {
        if (element.length > 2) {
            str = element[0] + "-" + element[element.length-1];
            strArray.push(str);
        } 
        else {
            strArray.push(element);
        }
    });
    console.log(strArray.join())
}

orderNumber([-10,-9,-8,-6,-3,-2,-1,0,1,3,4,5,7,8,9,10,11,14,15,17,18,19,20])