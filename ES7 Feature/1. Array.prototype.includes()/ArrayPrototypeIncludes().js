const arr = [1, 2, 3, 4, 5];
                                            // Check if there is the number 3 in the array
console.log(arr.includes(3));


 

 if (arr.includes(3)) { console.log(arr.indexOf(3))  }
// // ... Equivalent to the previous writing of indexOf
console.log(arr.indexOf(3));                                                            // 2 (return its array position)
// // If you want to write it in the if, you must add `> -1`, which is not as clear as the include in ES7 in terms of semantics
 if (arr.indexOf(3) > -1) { console.log(arr.indexOf(3)); }