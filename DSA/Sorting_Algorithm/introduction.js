// 

// Not commonly used sorting algo 
// Bubble sort 
// selection sort 
// Insertion sort 


// Sorting In Javascript 

// example 1 

function sortNumbers(num1, num2){
    return num1 - num2
} 

let sortedNums = [100, 20, 1, 5, 8, 11, 34].sort(sortNumbers) 
console.log(sortedNums) 

function sortStrings(string1 , string2){
    return string1.length - string2.length
} 

let sortedStrings = ["Ian", "A", "Jade", "Jadot", "Bumatay"].sort(sortStrings)  // sorted each strings by the shortes length in ascending order
console.log(sortedStrings)