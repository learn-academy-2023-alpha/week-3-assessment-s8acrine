// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Pseudocode: Create a function fibSeqBuilder
// input: a number (num) such that num >= 2
// output: an array (fibSeq) that contains the first num values of the Fibonacci Sequence
// Fibonacci sequence is a sequence of numbers where each number (other than the first two numbers are equal to the sum of the previous two numbers
// Let's get coding:
// Create an array fibSeq with the first numbers of the sequence [1, 1]
// create a function fibSeqBuilder
// use a for loop
//i can start at 2 (the index immidiatley after the first two numbers) and can continue until i is = fibLength
// loop should set the index to = the sum of the previous two indices (i-1 and i-2)
// function should return the newly updated array

// a) Create a test with expect statements for each of the variables provided.
describe("fibSeqBuilder", () => {
  const fibLength1 = 6;
  // Expected output: [1, 1, 2, 3, 5, 8]
  const fibLength2 = 10;
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

  it("returns an array of the first <input> numbers of the Fibonacci Sequence", () => {
    expect(fibSeqBuilder(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibSeqBuilder(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});

// b) Create the function that makes the test pass.

const fibSeqBuilder = (fibLength) => {
  let fibSeq = [1, 1];
  for (i = 2; i < fibLength; i++) {
    fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1]);
  }
  return fibSeq;
};

// PASS  ./code-challenges.test.js
// fibSeqBuilder
//   ✓ returns an array of the first <input> numbers of the Fibonacci Sequence (8 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.078 s, estimated 2 s
// Ran all test suites.
// ✨  Done in 4.51s.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Pseudocode:
// Input: object containing a set of 7 key:value pairs. The values are numbers
// Output: An array of numbers, sorted from least to greatest
// Let's get coding:
// Create a function studyTimeSorter
// Use the .values() built in method to create an array of the values from the object (the minutes studied each day)
// use the .sort() method as a higher order function to sort values by using the a,b => a-b compare function as an argument
// Return the sorted function

// a) Create a test with expect statements for each of the variables provided.

describe("studyTimeSorter", () => {
  // Place the needed test inputs inside the testing suite
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60,
  };
  // Expected output: [15, 15, 20, 30, 30, 60, 90]
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65,
  };
  // Expected output: [10, 15, 20, 45, 60, 65, 100]
  // build out the id,describes,expects,toEqual statements
  it("Returns an array of the minutes studied in order of least to greatest", () => {
    expect(studyTimeSorter(studyMinutesWeek1)).toEqual([
      15, 15, 20, 30, 30, 60, 90,
    ]);
    expect(studyTimeSorter(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ]);
  });
});

// b) Create the function that makes the test pass.
const studyTimeSorter = (studyMinutes) => {
  let studyTimes = Object.values(studyMinutes);
  return Object.values(studyMinutes).sort((a, b) => a - b);
};

// PASS  ./code-challenges.test.js
// fibSeqBuilder
//   ✓ returns an array of the first <input> numbers of the Fibonacci Sequence (6 ms)
// studyTimeSorter
//   ✓ Returns an array of the minutes studied in order of least to greatest (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.878 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 3.53s.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//Pseudocode:
// Input: array of numbers
// Output: an array with each index containing the running total of numbers
// Create a function called balanceTracker
// create a balance array to store running total
// use 💥.forEach()💥 to iterate through the input array, passing in both the value and the index
// if it's the first index and the value of the index is a number, push it into the balance array
// otherwise, take the value of the current index and add it to the previous index of the balance array

// a) Create a test with expect statements for each of the variables provided.

describe("balanceTracker", () => {
  // Place the needed test inputs inside the testing suite

  const accountTransactions1 = [100, -17, -23, -9];
  // Expected output: [100, 83, 60, 51]
  const accountTransactions2 = [250, -89, 100, -96];
  // Expected output: [250, 161, 261, 165]
  const accountTransactions3 = [];
  // Expected output: []

  // build out the id,describes,expects,toEqual statements
  it("Returns an array with a running total of the input", () => {
    expect(balanceTracker(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(balanceTracker(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(balanceTracker(accountTransactions3)).toEqual([]);
  });
});

// b) Create the function that makes the test pass.

const balanceTracker = (transactions) => {
  let balance = [];
  transactions.forEach((v, i) => {
    i === 0 ? balance.push(v) : balance.push(v + balance[i - 1]);
  });
  return balance;
};

// PASS  ./code-challenges.test.js
// fibSeqBuilder
//   ✓ returns an array of the first <input> numbers of the Fibonacci Sequence (5 ms)
// studyTimeSorter
//   ✓ Returns an array of the minutes studied in order of least to greatest (1 ms)
// balanceTracker
//   ✓ Returns an array with a running total of the input (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.794 s, estimated 2 s
// Ran all test suites.
// ✨  Done in 2.72s.
