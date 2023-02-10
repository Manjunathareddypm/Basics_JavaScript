
//Without Higher-order function

const arr0 = [5, 7, 1, 8, 4];
let sum0 = 0;
for(let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
// prints 25
console.log(sum);


// with Higher-order function

const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// prints 25
console.log(sum);

/////
const arr1 = [5, 7, 1, 8, 4];
const sum1 = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);
// prints 35
console.log(sum);
