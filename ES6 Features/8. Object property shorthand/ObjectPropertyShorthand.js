const name1 = 'Angel', age = 18, city = 'ChangHwa';

// Before ES6, we must write like this
const customer = {
    name1: name1,
    age: age,
    city: city
}                                 

console.log(customer);              // // {name: 'Angel', age: 18, city: 'ChangHwa'}

// After ES6, we can do it

const newCustomer = {
    name1,
    age,
    city
}                                   
console.log(newCustomer);             // // {name: 'Angel', age: 18, city: 'ChangHwa'}