// The await operator is used to wait for a Promise and get its fulfillment value. 
// It can only be used inside an async function or at the top level of a module.

// Example1

// var abc = () => {
//     let a = 10
//     let b = 20
//     let sum = a + b
//     return sum 
// }

// function promiseFun() {
//     return new Promise((reslove) => {
//         setTimeout(() => {
//             reslove(abc())
//         }, 2000)
//     })
// }

// async function asyncCall() {
//     let number = 6
//     console.log("calling");
//     const result =  await promiseFun();
//     console.log("after resloving result " +result);
//     const sum = result + number
//     console.log("Final result " +sum);

    
// }

// asyncCall()

//Example 2

// function resolveAfter2Seconds(x) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(x+"th Number");
//       }, 2000);
//     });
//   }
  
//   async function f1() {
//     const x = await resolveAfter2Seconds(10);
//     console.log(x);                                                     // o/p 10
//   }
  
//   f1();

  // Example 3

//   function resolveAfter2Second() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve([10, 20, 30]);
//       }, 2000);
//     });
//   }
  
//   async function f2() {
//     const x = await resolveAfter2Second();
//     console.log(x);                                                     // o/p 10, 20, 30
//   }
  
//   f2();

  // Example 4

//   var arrayElement = (x) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve([10, 200, 300])
//         }, 5000)
//     }) 
//   }

//   async function main() {
//    const indexElement = await arrayElement(1)
//    console.log(indexElement);
//   } 
//   main()

  //Example 5

  function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink === 'coffee'){
            resolve('order for coffee is recieved')
        }else{
            reject('order for coffee is rejected')
        }
    })

  }


  function processOrder(order){
    return new Promise(function(resolve){
        console.log("Order is being Processed");
         resolve( order+ ` and is served`)
    })
  }

  async function serveOrder() {
    let OrderPlaced = await placeOrder('coffee')
    console.log(OrderPlaced);
    let proccessedOrder =  await processOrder(OrderPlaced)
    console.log(proccessedOrder);
    
  }

  serveOrder()


  






