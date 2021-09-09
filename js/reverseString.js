// Reverse string 
// Greetings!
// Apple 

// Solution 1 
// 1. turn string into array .split() and set to an array variable 
// 3. reverse the array of strings .reverse() 
// 4. return array to string to string data using .join() 

function reverseString(str){
    const arr = str.split("")
    arr.reverse()
    str = arr.join("")
    return str
} 

console.log(reverseString("Greetings!")) 
console.log(reverseString("Apple"))