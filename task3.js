const add = (num1, num2) => {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        
        let digit1 = i >= 0 ? parseInt(num1.charAt(i)) : 0;
        let digit2 = j >= 0 ? parseInt(num2.charAt(j)) : 0;

        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10); 
        let currentDigit = sum % 10; 

        result = currentDigit.toString() + result;
        i--;
        j--;
    }

    return result;
}

console.log(typeof(add("22", "144")))