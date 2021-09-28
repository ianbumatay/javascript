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

//////////////////////

let fruites = ["Orange", "Apple", "Banana", "Grapes"]  

 fruites.sort((a,b)=>{
     if(a < b){
        return -1 // change to -1 to  1 to sort decending
     }
     if(a > b){
         return 1 // change 1 to -1 for decending
     }
     if(a == b){
         return 0
     }
 })

 //////////////////// Sorting an Obj

 let employee = [
    {id:1, name: "Ian", salary: 10000},
    {id:1, name: "Jada", salary: 8000},
    {id:1, name: "Jade", salary: 20000}
] 

employee.sort((a,b)=> {

   if(a.salary < b.salary){
       return - 1
   }
   if(a.salary > b.salary){
       return 1
   }
   if(a.salary === b.salary){
       return 0
   }
}) 

console.log(employee)