// Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.
let q1test = 15;

if (q1test % 3 === 0 && q1test % 5 === 0) {
  console.log(q1test + " is divisible by both 3 and 5.");
} else if (q1test % 3 === 0) {
  console.log(q1test + " is divisible by 3.");
} else if (q1test % 5 === 0) {
  console.log(q1test + " is divisible by 5.");
} else {
  console.log(q1test + " is not divisible by 3 or 5.");
}

// Q2. Using an if-else statement, determine if a year is a leap year or not.
// Leap year conditions: Year must be divisible by 4, except for years divisible by 100, unless they are also divisible by 400.
let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 4 === 0) {
    console.log(i);
  }
}
