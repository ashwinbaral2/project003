const arr = [3, 5, 2];
//!Q1    Console.log the maximum number of an array
//*      expected output 5
let maxNum = Math.max(...arr);
console.log(maxNum); //5

//!Q2   Remove a specific element 2 from the array. Log the modified array to the console.
//*     expected output: [3,5]

const elementToRemove = 2;
const removeArray = [3, 5, 2];
removeArray.splice(removeArray.indexOf(elementToRemove), 1);
console.log(removeArray); //[3,5]

//!Q3   Multiply each element of the array by a constant value 5 and log the modified array to the console.
//*     expected output [15,10]
const multiplyByFive = (num) => {
  return num * 5;
};
const multiplieArray = arr.map(multiplyByFive);
console.log(multiplieArray); //[15,10]

//!      find intersection (common elements) of arr and arr2
//*      expected output: [5]
const arr2 = [5, 21, 32];
const intersectArr = arr.filter((val) => arr2.includes(val));
console.log(intersectArr); //[5]
