// Fibonacci sequence

// var i;
// var fib = []; // Initialize array!

// fib[0] = 0;
// fib[1] = 1;
// for (i = 2; i <= 10; i++) {
//   // Next fibonacci number = previous + one before previous
//   // Translated to JavaScript:
//   fib[i] = fib[i - 2] + fib[i - 1];
  //console.log(fib[i]);
//} 

//=> 1 2 3 5 8 13 21 34 55 
// 1 + 2 = 3 
// 2 + 3 = 5 
// 3 + 5 = 8 
// 5 + 8 = 13 
// 8 + 13 = 21 
// 13 + 21 = 34 
// 21 + 34 = 55   

function fib(num){

    // initialize the fibonacci sequence you'r going to generate inside an array 
    // and initialize the array with the two numbers of the sequence
    const result = [0,1] 

    for(let i = 2; i <= num; i++){
        const prevNum1 = result[i - 1] 
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }
    console.log(result[num])

}


// Recursion
// function fib(num){  
// //console.log(num)

//     if(num < 2){
//         return num 
//     }
//     return fib( num - 1 ) + fib( num - 2 )
// } 

console.log(fib(15)) //=> 610


