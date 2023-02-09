// padStart
let a = '100'.padStart(5, 0); // 00100
// If the content to be padded exceeds the "padding length". Then fill in from the left to the upper limit of the length
let b = '100'.padStart(5, '987'); // 98100

console.log(a);
console.log(b);

// padEnd
const x = '100'.padEnd(5, 9); // 10099
// If the content to be padded exceeds the "padding length". Then fill in from the right to the upper limit of the length
const y = '100'.padStart(5, '987'); // 10098

console.log(x);

console.log(x);

