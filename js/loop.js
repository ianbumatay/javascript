//for loop  

// for ([initialization]); [condition]; [final-expression]) {
//     // statement
//  }

//Print 1 to 10
// for(let i = 1; i <= 10; i++ ){  
//     console.log(i)
// }   

// ForEach 

function findSumOfEven(numArray){

    let sum = 0

    numArray.forEach((e) => {
        if(e % 2 === 0){
            sum += e
        }
    })
    return sum
} 

console.log(findSumOfEven([2,2,2,1,2]))


// print Odd

// for(let i = 1; i <= 10; i++){ 
//     if(i % 2 == 1) { //
//         console.log(i)
//     }
    
// } 

// //print even 

// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 0){ // divisible by 2 withoout remainder == even
//         console.log("Number " + i  + " is a even number")
//     }
// }