// const decompose = num => {
//     let sum = num * num;
//     let numberList = [];
//     let results = [];

//     for (let i = 1; i < num; i++ ) {
//         numberList.push(num - i)
//     }
//     //console.log(numberList)
//     combination = (remainingSum, currentCombination, start) => {
//         if (remainingSum === 0) {
//             results.push([...currentCombination]);
//             return;
//         }

//         if (remainingSum < 0) {
//             return;
//         }

//         for (let i = start; i < numberList.length; i++) {
//             currentCombination.push(numberList[i]);
//             combination(remainingSum - numberList[i] * numberList[i], currentCombination, i+1);
//             currentCombination.pop();
//         }
//     }

//     combination(sum, [], 0);
//     return results;
// }

// let param = 55;
result = decompose(param);
str = "decompose " + param + " returns ";
// if (result.length > 0)
//     str += result[0].reverse().toString()
// else
//     str += " Nothing"
// console.log(str);


const decompose = num => {
    const sum = num * num;
    const numberList = Array.from({length: num-1}, (_, i) => num - 1 - i);
    const results = [];
    const combination = (remainingSum, currentCombination, start) => {
        if (remainingSum === 0) { results.push([...currentCombination]); return; }
        if (remainingSum < 0) return;
        for (let i = start; i < numberList.length; i++) {
            currentCombination.push(numberList[i]);
            combination(remainingSum - numberList[i] ** 2, currentCombination, i + 1);
            currentCombination.pop();
        }
    };
    combination(sum, [], 0);
    return results;
};

let param = 55;
const result = decompose(param);
console.log(`decompose ${param} returns ${result.length ? result[0].reverse().join(',') : 'Nothing'}`);