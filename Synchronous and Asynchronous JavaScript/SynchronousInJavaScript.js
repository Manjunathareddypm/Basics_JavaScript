    // Define a function

    function f1() {
        console.log("Simple  function 1 time")  // doing something
        console.log("Simple  function 2 time") // Do something again
        console.log("Simple  function 3 time")// Again
        // So on...
    }

    f1()    // Invoke the function

    //////////////////////////////////////////////////



    // Blocking method is execute Synchronous

    console.log("Hello");
    console.log('hi');
    console.log(`Welcome to JavaScript`);

    //////////////////////////////////////

    function f1(a) {
        console.log("Simple Synchronous function " + a + " time")
    }
    function f2(a) {
        console.log("Simple Synchronous function " + a + " time")
    }
    function f3(a) {
        console.log("Simple Synchronous function " + a + " time")
    }
    
    // Invoke the functions one by one
    f1(1);
    f2(2);
    f3(3);

    ///////////////////////////////////

    function f1(a, b) {
        const sum = a + b
        console.log("addition of two numbers " + sum)
      }
      function f2(a, b) {
        const sub = a - b
        console.log("substraction of two numbers " + sub)
        f1(3, 1);
      }
      function f3(a, b) {
        const sub = a * b
        console.log("Multiplication of two numbers " + sub)
        f2(2, 1);
      }
      f3(1,5);