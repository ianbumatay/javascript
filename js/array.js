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

// function reverseArray(numbers){ 
    
//     let newArray = []

//     for(let i = numbers.length - 1; i >= 0; i -- ){
//         newArray.push(numbers[i])
//     }
//     return newArray
// } 

// console.log(reverseArray([1,2,3,4,5]))


// writing own reverse function 

let numbers = [1,2,3,4,5] 
            // 0 1 2 3 4 

function reverseNumbers(numbers){
    let leftIndex = 0 
    let rightIndex = numbers.length - 1 

    //console.log(rightIndex) 

    while(leftIndex < rightIndex){ // if left index less than right index 

        // swap the elements with the temp variable
        let tempVar = numbers[leftIndex] 
        //console.log(tempVar)
        numbers[leftIndex] = numbers[rightIndex] // set right index to left index
        //console.log(numbers[leftIndex])
        numbers[rightIndex] = tempVar  // set temp var to right index
        console.log(numbers[rightIndex])

       
        // move variable to the middle 
        leftIndex ++
        rightIndex --

    } 
} 

console.log(reverseNumbers(numbers))

