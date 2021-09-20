// Writing funtion  

// function regular(){
//     console("Regular function ")
// } 

// const test = function(){ // assigning the function to the obj called  test
//     console.log("this is a function expression")
// }  

// test()

// // arrow function
// const addNum = (a,b) => {  // with multiple argument
//     return a + b 
// } 

// // const addNum = (a,b) => a + b // short cut

// const name = str => { // with one argument
//     console.log(str)
// } 

const myFunc = () => {
    console.log("arrow", this)
} 

myFunc() //=> returns the object {}


const express = function(){
    console.log("expression", this)
} 

express() //=> Object [global]


function regular(){
    console.log("regular", this)
} 

regular() //returns global