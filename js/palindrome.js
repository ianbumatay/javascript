// palindrome  check 




// function isPalindrome(str){ 

//     const len = str.length 

//     for(let i = 0; i <= len / 2; i++){ 

//         if(str[i] !== str[len - 1 - i]){ 
//             return false
//         }else{
//             return true
//         } 

//     }

// }  

function isPalindrome(string){ 

    // Convert string to array 
    const arrayValues = string.split('') 
    console.log(arrayValues)

    // Reverse array values 
    const reverseArrayValues = arrayValues.reverse() 
    console.log(reverseArrayValues) 

    // Convert array to string 
    const  reverseString = reverseArrayValues.join('')  
    console.log(reverseString)

    if(string == reverseString){
        //console.log("It is a palindrome")
        return true
    }else{
        //console.log("Its not a palindrome")
        return false
    }

}

 console.log(isPalindrome("kayak")) 

// string = "This is a string" 
// str = string.length 
// console.log(str)