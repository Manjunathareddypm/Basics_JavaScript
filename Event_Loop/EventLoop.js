
// Example 1

console.log("First Line");
cb2(1,"hi")
function cb1(err, data) {
    if(err){
        console.log(err);
    }
    console.log(data);
}

cb2(2,"Hello")
function cb2(err, data) {
    if(err){
        console.log(err);
    }
    console.log(data);
}
console.log("last Line");