 function otherAsyncFunction(){
    return new Promise(function(resolve, reject) {
        let a = 0
        if(a === 0){
            resolve("Sucess")
        }else{
            reject("Failed")
        }

    })
}

async function test() {
    try {
        const result = await otherAsyncFunction();
        console.log(result); // output result
    } catch(e) {
        console.log(e); // Can catch errors if otherAsyncFunction() throws an error
    }
}
test()
