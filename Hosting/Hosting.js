                        // Hosting Variables


    console.log(a);    
    var a= 'Hello World!';   //declared the variable after the printing statment so we will get o/p as undefined

    var b;
    console.log(a);
    b = 'Hello World!';     // here the solution for it when we declare the var able above print statment then and initialize it after the statement then it wont be the problem
                            // o/p will be Hello World


                            // LexicalEnvironment = {
                            //     Identifier:  <value>,
                            //     Identifier:  <function object>
                            //   }


                            // Hoisting Function Declaration:

    helloWorld();  // prints 'Hello World!' to the console
    function helloWorld(){
    console.log('Hello World!');
    }

                        // lexicalEnvironment = {
                        //     helloWorld: < func >
                        //   }


                            // Hoisting Function Expressions 

//     helloWord1();   // TypeError: helloWorld is not a function
//     var helloWorld1 = function(){
//   console.log('Hello World!');
//     }

    //overcome the above code like this.

var helloWorld2 = function(){
  console.log('Hello World!');  //prints 'Hello World!'
}
helloWorld2();


                            // Hoisting var variables:

console.log(ab); // outputs 'undefined'
var ab = 3;

// lexicalEnvironment = {
//     a: undefined
//   }

var abc;
console.log(ab); // outputs '3'
var ab = 3;

// lexicalEnvironment = {
//     a: 3
//   }

                        //Hoisting let and const variables:

                        let ad
                        console.log(ad);        // o/p undefined
                         ad = 3;

                        //  lexicalEnvironment = {
                        //  a: <uninitialized>
                        // }

                        
                        // console.log(xyz);        //error
                        // const xyz = 20

                        // lexicalEnvironment = {
                        //     ad: undefined
                        //   }


                        function foo () {
                            console.log(x);
                          }
                          let x = 20;
                          foo();                     // This is perfectly valid


         
                        //   function foo1() {
                        //     console.log(z); // ReferenceError: a is not defined
                        //    }
                           
                        //    foo1(); // This is not valid
                        //    let z = 20;



                        //Hosting Class Declaration

// let peter = new Person('Peter', 25); // ReferenceError: Person is  
//                                      // not defined
// console.log(peter);
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let peter = new Person('Peter', 25)
console.log(peter);

// lexicalEnvironment = {
//     Person: <uninitialized>
//   }

// lexicalEnvironment = {
//     Person: <Person object>
//   }

                                    // Hoisting Class Expressions

                                    
// let peter1 = new asd('Peter', 25)
// console.log(peter1);                  
// let asd = class  {
//     constructor(name, age) {            // Error it is same as function expression
//       this.name = name;
//       this.age = age;
//     }
//   }

                    
let asd1 = class  {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let peter2 = new asd1('Peter', 25)
console.log(peter2);
 





                        
                        