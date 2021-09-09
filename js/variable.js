
//Variable 

// The "var" keyword for declaring variable in JS 

// Functional scope = can be access inside the scope of the function where it is declared. 

// function funcScope(){ // function scope

//     if(true){ // block scope
//         var x = "If true print this message"
//     }  //=> end of the block

//     console.log(x)

// } 

// console.log(funcScope())



// let  can only declaire once and can be re assign

//let declareVariable; // variable decleration  

// Define a variable
//let declareVariable = "assigning value to the variable"  

// accessing data in the variable 
//declareVariable 
//console.log(declareVariable) //=> printing data in the console


//block scope  

// {
//     let message = "Hello world"
//     console.log(message) // prints "Hello world"
// } 

//console.log(message) //=> reference Error 

// function myFunction(){
//     if(true){
//         const message = "I am inside the block scope!" 
//         console.log(message)
//     } 
//     console.log(message) // Reference Error, Outside the block scope!
// } 
// console.log(myFunction()) 

// function myFunc(){ // functiom scope 
//     //let x = 25

//     if(true){// block scope 
//         var x = 5
//         console.log(x)
//     } 

//     console.log(x)

// } 

// myFunc()







// const name = "Ian"
// console.log(name)
// name = "Jade"

// console.log(name) 


 Undefined & Null 

// Null =  I'm trying to access something  and doesn't have a value  
let a = null 
console.log(a)

// Undefined does not exist yet
let b
console.log(b) //=> undefined