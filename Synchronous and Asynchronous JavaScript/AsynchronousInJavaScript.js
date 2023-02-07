function printMe() {
    console.log('Hello there');
  }
  
  setTimeout(printMe, 2000);


  /////////////////////////////////////

  function printMe1() {
    console.log('Waiting and printing');
  }
  
  function test() {
    console.log('First print this Statment');
  }
  
  setTimeout(printMe1, 2000);
  test();

  ////////////////////////////////////

  function f1() {
    console.log('f1 prints last');
}

function f2() {
    console.log('f2 prints Second');
}

function main() {
    console.log('print main first');
    
    setTimeout(f1, 0);
    
    f2();
}

main();