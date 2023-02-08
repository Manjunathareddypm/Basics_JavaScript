

//A Promise is a proxy for a value not necessarily known when the promise is created

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.

// reslove or result: meaning that the operation was completed successfully.

// rejected: meaning that the operation failed.

// new Promise((reslove, reject) => {
//     reslove()
//     reject()
// }) .then((result) => {

// }).catch((error) => {
    
// })



// Example 1

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([89, 45, 323]);
    }, 5000);
});
  
promise.then(values => {console.log(values[1]);
});


// Example 2

var abc = () => {
    let a = 10
    let b = 20
    let sum = a + b
    return sum 
}

const test = () => {
    return new Promise((reslove, reject) => {
        let condition = true
        if(condition != true){
            reslove(abc())
        }else{
            reject("respose failed")
        }
    })
}

test().then((result) => console.log("after resloving " +result))
.catch((error) => console.log("after rejecting " +error))


// Example 3

function sub(value){
    return new Promise(function(reslove, reject){
        if (value != 1) {
            let x = 20
            let y = 5
            let subraction = x - y
            reslove(subraction)          
        }else{
            reject("machine failed")
        }

    })
}
sub(0).then((reslove) => console.log("subraction of 2 numberv is: " +reslove))
.catch((reject) => console.log("process failed " +reject)) 

// Example 4


function promiseFun() {
    console.log("Outside Functions");
    function insideFin(){
        console.log("Inside Function");
        return 5
    }        
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(insideFin())
        }, 2000)
        
    })
    
}

promiseFun().then((res) => console.log(("result -----------> " +res)))

// Example 5

const promises = Promise.resolve(3126);
      
const promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
    promises.then(val => console.log(val));
}, 5000);
});
  
promise1.then()





  






