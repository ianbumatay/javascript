// Array Methods For Seraching
// takes in  a callback function funtcion with 4 argument
// arrayMethod.((element, index, array, thisArg)=> { }) 

let arrOfNums = [100, 2000, 500, 4300, 3500, 2500]

// .find => returns the first element found

let num = arrOfNums.find((element)=>{ 
    return element > 6000  // NO match == undefined
}) 
//console.log(num) //=> returns the first element found 


// .findIndex() of returns the index of the first element found  
// NO match == undefined

let findIndexOfNum = arrOfNums.findIndex((e)=> { 
    return e > 4000 // conditonal 
}) 
//console.log(findIndexOfNum) 

// .filter method => returns a new array  of element found 
// returns an empty array [] if no element found

let filterNum = arrOfNums.filter((e)=>{
    return e > 500 //=> return all element that is greater than 500
}) 
//console.log(filterNum) //=> [ 2000, 4300, 3500, 2500 ] returns a new array 


// arrayMethod.map() map every single element 

let names = ["Ian", "Jade", "Jada"]  

// names.map(function(element, index, array){ 
//    statement
// })

// names.map((e)=> {
//  console.log(e)
// }) 

// create function that square elements in array
let nums = [3, 4, 2, 1, 5] 

function squareNums(nums){

    return nums.map((num)=> {  
        squared = num * num
        return squared
    })   
} 

//console.log(squareNums(nums)) 

function sortSquaredNums(nums){ 
    sortedNums = nums.sort()
    //console.log(squaredNums)  
    return sortedNums.map((num)=> { 
        return num * num
    })
} 

console.log(sortSquaredNums(nums))

