/**
 * map(inputArray, transformerCallback)
 * return new transformed array
 */
const map = function(inputArr, callback) {
  // Your code here
}


 // Test case 1
const input1 = [1, 2, 3];
const squareNum = (num) => num * num
console.log(map(input1, squareNum)); // [1, 4, 9]

// Test case 2
const out2 = map(['yo', 'hey', 'wazaaa'], function(str) {
  return str.length
});

console.log('output of test 2 :', out2); // [2, 3, 6]


//============================================
// STRETCH: DO NOT DO THIS UNLESS YOU'RE BORED

/**
 * filter(inputArray, callback)
 * return new filtered array
 */

// Alright, since you're here, uncomment the code below and give it a shot.
// const filter = function(inputArr, callback) {
//   // Your code here
// }


//  // Test case 1
// const input1 = [1, 2, 3];
// const isEven = (num) => num % 2 === 0
// console.log(filter(input1, isEven)); // [2]

// // Test case 2
// const out2 = filter(['yo', 'hey', 'wazaaa'], function(str) {
//   return str.length > 2
// });

// console.log('output of test 2 :', out2); // ['hey', 'wazaaa']
