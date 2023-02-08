
                        // CallBackFunction

    // A callback is a function that passesed as a arguments to the another function.
    // A callback is a function that is to be executed after the another function has finished  executing. hence named as callback function.

    // Example 1

    let b = () => {
        console.log("Hello");
    }

    let test1 = (a) => {
        console.log("hi");   
        a(); 
    }

    let test2 = () => {
        console.log("there");
         b();
    }

    test1(test2)


    ///////////

    // Example 2

    var greet = (x, y) => {
         let sum = x + y;
         console.log(sum); 
    }

    var add = (callback) => {
        let x = 2020;
        let y = 3;
        console.log("Hello");
        setTimeout(()=>{
            callback(x , y)
        }, 5000)
    }

    add(greet)

   // Example 3


    function greeting(name) {
        console.log(`${name}`);
      }
      
      function processUserInput(callback) {
        console.log(`Hello, how are you`);
        const name = "Reddy"
        callback(name);
      }
      
      processUserInput(greeting);


      // Example 4


      function sentence(sent, callback){ 
        var msg = "I am Learning, " + sent;
        callback(msg); // 2
      }
      
      function fullSentence(msgRecevied){
        console.log("Hello");
        console.log(msgRecevied);
      }
      
      sentence("callback in JavaScript", fullSentence); 


      // Example 5


      function serverRequest(query, callback){
        console.log("Server access first");
        setTimeout(function(){
          var response = query + "Water!";
          callback(response);
        },5000);
      }
      
      function getResults(results){
        console.log("Response from the server: " + results);
      }
      
      serverRequest("The glass is full of ", getResults);


    