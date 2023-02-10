// Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

// simple function

// let sum = function(x, y) {
//     console.log(x + y);
// }
// sum(2, 3)

// Example 1

let sumCurryied = function(fn){
    return function (fn1) {
        console.log( fn + fn1);
    }
}

let sumTwoNumbers = sumCurryied(2)

sumTwoNumbers(3)

// Example 2 

function add (a) {
    return function add1(b) {
        return function sub(c) {
            return function mul(d) {
                return function div(e){
                console.log( a + b - c * d / e );
                
            }
        }
            
        }
        
    }
    
} 

add(2)(3)(3)(3)(2)
// console.log(asd); 

// Example 3

function checkOddOrEven(x){
    return (y) => {
        if (x%2 == 0){
            let z = y
            console.log(z);
            console.log(`${x} Even is even number `);
        }else{console.log(`${x} odd number `);}
        
    }
}

let sum = checkOddOrEven(2)
sum(3)

// Example 4

function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
console.log(multiply(1)(2)(3)) // 6

const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
console.log(result);  // 6




