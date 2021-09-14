
// Palindrom

// const string = "A man, a plan, a canal. Panama" 
// //const string = "Javascript algo" 

// // RegEx that removes unwanted character
// var strRegex = /[^A-Za-z0-9]/g // or /[\W_]/g  

// // Lowercase the string
// strLowerCase = string.toLowerCase()  
// console.log(strLowerCase)

// //  .replace(/[^A-Za-z0-9]/g, '') 
// // => replace "a man, a plan, a canal. panama"   to  "amanaplanacanalpanama"
// strReplace = strLowerCase.replace(strRegex, '')
// console.log(strReplace) 

// // .split() to turn string to array 
//  strArray = strReplace.split('') 
//  console.log(strArray) 

//  // .reverse() Reverse elements in array
//  strReverse = strArray.reverse()
//  console.log(strReverse) 

// strJoin = strReverse.join('') 
// console.log(strJoin) 

function isPalindrome(string){ 
     var re = /[^A-Za-z0-9]/g  
     var strLowerCase = string.toLowerCase()
     var string1 = strLowerCase.replace(re, '') 

     var string2 = string1.split('').reverse().join('') 

     return string1 === string2

} 

console.log(isPalindrome("kayak"))