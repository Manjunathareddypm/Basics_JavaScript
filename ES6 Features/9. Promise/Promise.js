const waitSecond = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
});
waitSecond.then( () => {
    console.log('hello World after 1 second.');             // output this line after 1 second
    
    return waitSecond;
}).then( () => {
    console.log('Hell World after 2 sceond.');              // output this line after 2second
    
})