// what is IIFE and why are they used 

// Initially Invoke Function expression = function that is executed right after created
// to preserve a private scope within your function 

// Example 1
// (function sayIife(){
//     console.log(" say IIFE")
// })() 

// // Example 2
// (function doubleNum(n){
//     return n * 2   
// })(10)

// console.log(doubleNum(n))  

// Problem 1 
// Logging X and Y

(function(){ 
    // 'use stict' => to prrevent un usaull bugs
    var x = y = 200
})() 

console.log("y", y) //=> returns 200 because Y is global variable 
// what is happening under the hood  

// (function(){
//     y = 200      => global variable wich can be access anywahere in the code
//     var x = y

// })()

console.log("x", x) //=> x is not defined because x is not in the scope of the function
