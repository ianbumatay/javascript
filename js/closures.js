
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


// Write a function that keeps track on how many time it was called and return that number.

function myFunc(){
    let count = 0

    return function(){
        count++
        return count
    }
} 

console.log(myFunc()) //=> [Function (anonymous)] 

// create an instance to keep track of the count of function calls 

const instanceOne = myFunc() 
console.log(instanceOne())
console.log(instanceOne())
console.log(instanceOne())