//Q1 create two constants, add them assign to a new constants
const x = 8;
const y = 16;
let z = x + y;
console.log(z);
//Ans:24


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'
console.log(a===b);
//false

// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

const randomNumber = Math.floor(Math.random() * 6); // Random number between 0 (inclusive) and 6 (exclusive)

// Check if the random number is less than 3
if (randomNumber < 3) {
    console.log("lesser than 3");
} else {
    console.log("Greater");
}
