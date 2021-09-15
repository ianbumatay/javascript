// Reverse Arrau in place 


function reverseArray(numbers){ 
    
    let newArray = []

    for(let i = numbers.length - 1; i >= 0; i -- ){
        newArray.push(numbers[i])
    }
    return newArray
} 

console.log(reverseArray([1,2,3,4,5]))