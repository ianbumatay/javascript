
// what is the scope of a variable? 

// is the visibility, lifetime or availability of a variable 
// for example variables that are declared in function a is not available in function b 


// function a(){
//    let x = 10
// } 

// function b(){
//     console.log(x) //=> ReferenceError: x is not defined
// } 

// a() 
// b()

// The scope can be of a variable or a function 
// so the logic remains the same 

// Function scope vs block scope  

//var 

// Function scope  => es5 encourage "hoisting"
// "Hoisting" Happens behind the scene, internaly bringing the declaration on top 


// var x;     => internally var key word will hoist variable on the top before code execution
//console.log(x) 
// var x = 10 

// Block scope = it is nothing but the brackets {}, an if condition, for loop, while loop etc. 
// that is a block created wich creates a seperate scope for declaration created in the block 


//const; cannot be re declare and cannot be re assign


// variable declarationss
let name;

// cannot be re declare
let name = "Ian" 
console.log(name) //=> Ian

// can be re assign
name = "Jada" 
console.log(name) // Jada



