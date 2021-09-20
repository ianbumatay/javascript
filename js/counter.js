



// Write a jQuery or JS function that takes two integer parameters. Starting with the sum of
// your two parameters, print a countdown to the console (one second at a time) until the logs
// reach zero 


// function countDown(num1, num2){ 
//     var num = num1 + num2  
//     var timer = setInterval(function(){
//         num--
//         if(num == 0){
//           clearInterval(timer)
//         }else{
//             console.log(num)
//         }
//     },1000)
// }

// (countDown(5,5)) 

// function counterFunc(){
//     let counter = 0  // initialize to 0
//      counter ++       // increment count 
//      return counter    // return count
// }
 
// console.log(counterFunc()) //=> 1
// console.log(counterFunc()) //=> 1
// console.log(counterFunc()) //=> 1  

//Creating a counter using clodure

function counterFunc(){
    count = 0 
    return function(){
       count ++
       return count
    }
} 

const counter = counterFunc() 

console.log(counter()) //=> 1
console.log(counter()) //=> 2
console.log(counter()) //=> 3

