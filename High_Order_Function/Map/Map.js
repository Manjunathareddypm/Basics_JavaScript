// normal iteration

const arr1 = [1, 2, 3];
 const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}     
console.log(arr2); // prints [ 2, 4, 6 ]

//or

const a = [1, 2, 3];
a.forEach(element => {
    console.log(element * 2);    
});

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];
birthYear.forEach(element => {
    let ages = 2018 - element
    console.log(ages);
});
  
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);

// High Map iteration

const arr3 = [1, 2, 3];
const arr4 = arr3.map(function(item) {
  return item * 2;
});
console.log(arr4);

// even better

const arr5 = [1, 2, 3]
const arr6 = arr5.map(item => item * 2)
console.log(arr6)


const birthYear1 = [1975, 1997, 2002, 1995, 1985];
const ages1 = birthYear.map(year => 2018 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);