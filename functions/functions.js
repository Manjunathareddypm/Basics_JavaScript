
  //         // A JavaScript function is a block of code designed to perform a particular TextTrackList

    //         // Ex: add two Numbers, multiply two Numbers EventCounts
            
    //         // Functions are reuseable as they can be defined once and can be called with different values resulting in different result

    //         // Functions helps divide a complex problem into smaller chunks and makes your program easy to understand and maintain

    //                                 //Syntax

    //                                 function name(parameter1, paratmeter2, parameter3){
    //                                     //code to be executed
    //                                 }


    //Normal or Basic function in js

    function greet(){
        console.log("Good evening Manju")
    }//function declaration

    greet()
    greet()// function invocation
    greet()

    //function with paramter and argument

    function greet(username){
        console.log("Good evening " +username)
    }

    greet("Manju")
    greet('Reddy')
    greet(`PM`)



    


                                         // function Expresion


    var adding = function(a, b) {
        console.log(a + b);
    }

    adding(4, 4)

    //////////////////////////////////////

               
    var add = function(x, y){
        return x + y
    }
    
    const sum = add(2, 5)
    console.log(sum)




                                    //Hosting

                                    //hosting in a concept of javascript that allows u to move u declaration above.


        var a = "hi"

        function greet(){
            console.log("Hello JavaScript")
        }

        console.log(a)
        greet()

///////////////////////////////////////////////////

        greet()
        console.log(b)                  // o/p is undefined, because in memory excecution first it will be undefined
        var b = "hi"                    // suppose if we remove this line then we will get an error

        function greet(){
            console.log("Hello JavaScript")
        }

        

