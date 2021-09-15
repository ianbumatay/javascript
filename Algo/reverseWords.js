
function reverseWords(str){
    var wordsArr = str.split(" ") 
    var reverseWordsArr = [] 

    wordsArr.forEach(function(word){ 
        var reverseWord = '' 

        for(var i = word.length - 1; i >= 0; i--){ 
            reverseWord += word[i]
        } 
        reverseWordsArr.push(reverseWord)
    }) 
    return reverseWordsArr.join(" ")
} 

console.log("-- Revrese words ----")
console.log(reverseWords("This is a string of words!")) 
//=> sihT si a gnirts fo !sdrow 




// Reverse the string 
// Solution 1

// function reverseSrting(string){
//     var newString = "" 

//     for(var i = string.length - 1; i >= 0; i--){ 
//         newString += string[i]
//     }
//     return newString
// } 


// Solution 2 

function reverseSrting(string){
    var splitStr = string.split(" ") 
    var reverseStr = splitStr.reverse() 
    var joinStr= splitStr.join(" ") 
    return joinStr
}


console.log("-- Revrese string ----")
console.log(reverseSrting("This is a string of words!"))
//=> !sdrow fo gnirts a si sihT 
