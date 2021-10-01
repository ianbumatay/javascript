

// A loop is a programming tool that is used to repeat a set of instructions. 
// Iterate is a generic term that means “to repeat” in the context of loops. 
// A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met.



//for loop    

// for ([initialization]); [stopping condition]; [iteration statement]) {
//     // statement
//  } 

function printNum(num){

    for(let i = 0; i < num; i += 1){ // i++ 
       console.log(num) 
    }   
} 

//printNum(10) //=> loop 10X and output number 10  

//-----------------------------------

function printIndex(array){
    for(let i = 0; i < array.length; i++){
        console.log(i)  //=> print the index of each element
    }
    console.log("array length", array.length) //=> array length 6
}  

//printIndex( ["Jade", "Philip", "ericka", "Pheobe"]  ) 

//----------------------------------
// Looping through array

function printElement(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]) //=> print each element in the array
    }
} 

//printElement([4, 20, 12, 34, 87, 8] ) 

//------------------------------------- 
// Reversing the loop 

function reverseLoop(arr){ 

    for(let i = arr.length - 1; i >= 0; i-- ){
        console.log("index", i, "element", arr[i] ) 
    }

} 

//reverseLoop([1, 2, 3, 4, 5]) 

reverseLoop(["A", "B", "C", "D", "E"])




// for of return values
// for(let e of names){
//     console.log(e)
// }


// // for in returns index number of an element
// for(let e in names ){ 
//     console.log(e)
// }  

// // forEach takes in callback function with paramete value,index,array,thisArg

// names.forEach((name, index)=> { 
//     console.log(name,index) //=> print out value and index
// })





// // Print 1 to 10
// // for(let i = 1; i <= 10; i++ ){  
// //     console.log(i)
// // }    

// // function addUpTo(n){ 

// //     let total = 5 // start to 5 

// //     for(let i = 0; i <= n; i++){
// //         total += i  // 5+1+2+3+4+5+6+7+8+9+10
// //     } 
// //     return total
// // } 

// // console.log(addUpTo(10))  

// let arr = [1,2,3,4,5,6,7,8,10] 

// function findMissingNum(arr){ 

//     for(let i = 0; i <= arr.length; i++){
//         if( arr[i] + 1 !== arr[i + 1]){ 
//             console.log(arr[i] + 1)  //=> 9
//             console.log(arr[i + 1])  //=> 10
//             return arr[i] + 1 
//         }
//     } 
//     return false
// } 
// console.log(findMissingNum(arr))








// // ForEach 

// // function findSumOfEven(numArray){

// //     let sum = 0

// //     numArray.forEach((e) => {
// //         if(e % 2 === 0){
// //             sum += e
// //         }
// //     })
// //     return sum
// // } 

// // console.log(findSumOfEven([2,2,2,1,2]))


// // print Odd

// // for(let i = 1; i <= 10; i++){ 
// //     if(i % 2 == 1) { //
// //         console.log(i)
// //     }
    
// // } 

// // //print even 

// // for(let i = 0; i <= 10; i++){
// //     if(i % 2 == 0){ // divisible by 2 withoout remainder == even
// //         console.log("Number " + i  + " is a even number")
// //     }
// // }