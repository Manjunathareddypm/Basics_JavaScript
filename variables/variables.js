    
                                // let Variable
    
    //  let a = 10
    //  let a = 20                // There will be an error because of Redeclaration
    // console.log(a)

        let b = 10
        b = 20
        console.log(b)            // it works fine output will be 20

        let c = 10
        function showNumber(){     
            let c = 20            // it works fine because scope of Variable is different it is not in same scope. o/p 20
            console.log(c);
        }
        showNumber()


                                    // const variable

        // const d = 10
        // const d = 20             // There will be an error because of Redeclaration
        // console.log(d)                 


        // const e = 10
        // e = 20                     // There will be an error saying that Assignment to constant variable.
        // console.log(e)


        const f = 100
        console.log(f)                //o/p will be 100


        const g = 10
        function showNumber(){     
            const g = 20              // it works fine because scope of Variable is different it is not in same scope. o/p 20
            console.log(g);
        }
        showNumber()


                                    // var variable


        var x = 20
        var x = 30                  // it works fine because it is possible for Redeclaration and output will be 30
        console.log(x)

        var y = 20
        y = 30                      // it works fine because it is possible for Reassignment and output will be 30
        console.log(y)


        var z = 10
        function showNumber(){     
            var z = 20             // it works fine because scope of Variable is different it is not in same scope. o/p 20
            console.log(z)
        }
        showNumber()



                                                // Scope


        var msg = "hello"           // this is know as global declaration that means it will be acessed anywhere. 
        function printMsg(){
            var msg1 = "world"    //this is know as function scope declaration that means we can access that inside the function and Nested function's scope not outside of it. 
            {
                var msg2 = "Welcome to JavaScript"      // this is know as Block declaration that means it will be acessed only inside the block.                    
                console.log("Inside the Block " +msg + ' ' +msg1+" "+msg2)
            }
            console.log("Inside the function " +msg + ' ' +msg1+ " " +msg2)
        }
        console.log("Inside the function " +msg + ' ' +msg1+ " " +msg2)  // error because msg1 and msg2 is not defined. that means msg1 and msg2 is declared inside the function and it can not be accessed outside

        printMsg()


                                    //let scope

         let a = 100                                // if we comment this line means we get error in outside function
        function showNumber1(){
             let a = 200
             a = 450
            console.log("Inside the function " + a)

            {
                let a = 300
                console.log("Inside the Block " + a)
            }
        }
        console.log("outside the function " + a)

        showNumber1()


                                //const Scope



        const m = 100                                // if we comment this line means we get error in outside function
        function showNumber2(){
             const m = 200
             //m = 450                                // if we wont comment this line means we will get run time error
            console.log("Inside the function " + m)

            {
                const m = 300
                console.log("Inside the Block " + m)
            }
        }
        console.log("outside the function " + m)

        showNumber2()


                                //var scope


        var q = 100                                // if we comment this line means we get error in outside function
        function showNumber1(){
             var q = 200
             var q = 500
             q = 650
            console.log("Inside the function " + q)

            {
                let q = 300
                console.log("Inside the Block " + q)
            }
        }
        console.log("outside the function " + q)

        showNumber1()










    