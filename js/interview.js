


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

// function createButtons() {
//     for (var i = 1; i <= 5; i++) { //=> change var to let
//       var body = document.getElementsByTagName("BODY")[0];
//       var button = document.createElement("BUTTON");
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function() {
//            alert('This is button ' + i);
//       }
//       body.appendChild(button);
//     }
//  }
  
//  createButtons(); 

 // Closure is an inner function that has acces to the scope of an enclosing function. 

//  function outerFunc(outerParam){
//      const outerVar = "outer var" 
//      console.log(outerVar)

//      function innerFunc(innerParam){ 
//          const innerVar = "inner var" 

//          console.log(innerVar) 
//          console.log(outerParam) 
//          console.log(innerParam)
      
//      }
//      innerFunc("inner parameter")
//  } 

//  outerFunc("outer parameter")

// The "this" keyword in js => refers to the obj it belongs to

// dog = {
//     name: "fido" ,
//     age: 3, 

//     showThis(){
//         console.log(this)
//         console.log(this.name, this.age)
//     },

//     bark(){
//        console.log("woof woof")
//     } 
//} 
//
// console.log(dog.name)
// console.log(dog.age) 
// console.log(dog.bark()) 

//console.log(dog.showThis())


 
// Hoisting 

// const getProduct = function(num1, num2){
//     return num1 * num2
// } 

// annonymous function 

// let show = function(){ 
//     console.log("Annonymouse function")
// } 

// show() 

