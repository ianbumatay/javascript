//Arrays 

// Reversing array .reverse() 

//let numbers = [1,2,3,4,5] 

//let modifyNum = numbers.reverse()  //=>  [ 5, 4, 3, 2, 1 ]  // modify array

//let newNum = [...numbers].reverse() // 

// console.log(numbers) 
// console.log("----------") 
// //console.log(modifyNum)
// console.log("----------") 
// console.log(newNum)

// using slice to .slice() and reverse()
// let sliceNum = numbers.slice().reverse() // slice returns new array
// console.log(sliceNum) 
// console.log(numbers) 

// Using for loop  

function reverseArray(numbers){ 
    
    let newArray = []

    for(let i = numbers.length - 1; i >= 0; i -- ){
        newArray.push(numbers[i])
    }
    return newArray
} 

console.log(reverseArray([1,2,3,4,5]))
