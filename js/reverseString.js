// Reverse string 
// Greetings!
// Apple 

// Solution 1 
// 1. turn string into array .split()
// 2. set to an array variable 
// 3. reverse the string .reverse() 
// 4. retrun array to string .join() 

function reverseString(str){
    const arr = str.split("")
    arr.reverse()
    str = arr.join("")
    return str
} 

console.log(reverseString("Greetings!"))