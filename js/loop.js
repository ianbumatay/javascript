//for loop  

// for ([initialization]); [condition]; [final-expression]) {
//     // statement
//  }

// Print 1 to 10
// for(let i = 1; i <= 10; i++ ){  
//     console.log(i)
// }    

// function addUpTo(n){ 

//     let total = 5 // start to 5 

//     for(let i = 0; i <= n; i++){
//         total += i  // 5+1+2+3+4+5+6+7+8+9+10
//     } 
//     return total
// } 

// console.log(addUpTo(10))  

let arr = [1,2,3,4,5,6,7,8,10] 

function findMissingNum(arr){ 

    for(let i = 0; i <= arr.length; i++){
        if( arr[i] + 1 !== arr[i + 1]){ 
            console.log(arr[i] + 1)  //=> 9
            console.log(arr[i + 1])  //=> 10
            return arr[i] + 1 
        }
    } 
    return false
} 
console.log(findMissingNum(arr))








// ForEach 

// function findSumOfEven(numArray){

//     let sum = 0

//     numArray.forEach((e) => {
//         if(e % 2 === 0){
//             sum += e
//         }
//     })
//     return sum
// } 

// console.log(findSumOfEven([2,2,2,1,2]))


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