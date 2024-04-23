const arr = [3,5,2]
//Q1 calculate length of array and console log
//expected output is 3
console.log(arr.length); //3


//Q2 reverse the array and console log
//expected output [2,5,3]

let reversedArr= arr.reverse();
console.log(reversedArr); //[2, 5, 3]


///Q3 join the array and console log
// expected output 352
let joinedStr = arr.join("");
console.log(joinedStr); //['253']

//console.log the maximum number of an array
//expectedd output 5
let maxNum = Math.max(...arr)
console.log(maxNum); //5