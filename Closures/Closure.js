// Examples 1
function test() {
    let a = 5
    function test1(){
        console.log(a);
    }
    return test1
    
}
let fun = test()

//console.log(fun);

fun()


// Examples 2

function greet() {
    let name = "Reddy"
    function displayName() {
        console.log("hi " +name); 
        let age = 26
        function displayAge() {
            console.log("My age is " +age);
        }
        return displayAge
    }
    return displayName
}

let g1 = greet()
//console.log(g1);

let g2 = g1()
//console.log(g1);

g2()


// Example 3

let a = 'global';
  function outer() {
    let b = 'outer';
    function inner() {
      let c = 'inner'
      console.log(c);   // prints 'inner'
      console.log(b);   // prints 'outer'
      console.log(a);   // prints 'global'
    }
    console.log(a);     // prints 'global'
    console.log(b);     // prints 'outer'
    inner();
  }
outer();
console.log(a);         // prints 'global'

// Example 4

function getCounter() {
    let counter = 0;
    return function() {
      return counter++;
    }
  }
  let count = getCounter();
  console.log(count());  // 0
  console.log(count());  // 1
  console.log(count());  // 2

  