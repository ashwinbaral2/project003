const arr = [3, 5, 2];
//!Q1   calculate length of array and console log
//*     expected output is 3
console.log(arr.length); //3

//!Q2   reverse the array and console log
//*     expected output [2,5,3]

let reversedArr = arr.reverse();
console.log(reversedArr); //[2, 5, 3]

///!Q3  join the array and console log
//*     expected output 253
let joinedStr = arr.join("");
console.log(joinedStr); //['253']

//!Q4   Remove the last element from the array and log the modified array to the console
//*     expected output [2, 5]
const remainingArr = arr.pop();
console.log(remainingArr); //3
console.log(arr); //[2, 5]


//!Q5   Check if all elements in the array  are even. Log "All even" or "Not all even" accordingly.
const array = [6, 4, 2, 8, 10, 12];

if (array.every((num) => num % 2 === 0)) {
  console.log("All even");
} else {
  console.log("Not all even");
}

if (array.every((num) => num % 2 !== 1)) {
  console.log(`they are even`);
} else {
  console.log("they are not even");
} //they are even

//!     Find the index of a specific element in the array. Log the index to the console.
//*     expected output: 3

const allNum = [3, 5, 2, 8, 5];
const searchElement = 8;
let findIndex = allNum.indexOf(searchElement);
console.log(findIndex); //3

