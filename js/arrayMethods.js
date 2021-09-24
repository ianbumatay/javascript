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
    return e > 500 //=> return ann ARRAY of all elements that is greater than 500
}) 
//console.log(filterNum) //=> [ 2000, 4300, 3500, 2500 ] returns a new array 


// arrayMethod.map() map every single element 

let names = ["Ian", "Jade", "Jada"]  

// names.map(function(element, index, array){ 
//    statement
// })

// names.map((e)=> {
//  console.log(e) // returns new array and does not change the original array
// }thisArg) 

// create function that square elements in array
//let nums = [3, 4, 2, 1, 5] 

function squareNums(nums){

    return nums.map((num)=> {  
        squared = num * num
        return squared
    })   
} 

//console.log(squareNums(nums)) 

function sortSquaredNums(nums){ 
    //sortedNums = nums.sort()
    //console.log(squaredNums)  
    squaredArr = nums.map((num)=> { 
        return num * num
    })
    return squaredArr.sort((a,b)=> a-b ) // accending
} 

//console.log(sortSquaredNums(nums)) 

//  diplay id and fruite

let fruitesObj = [
    {id: 1, name: "Banana"}, 
    {id: 2, name: "Apple"},
    {id: 3, name: "Orange"}
] 

function fruitesArr(fruitesObj){

    fruiteName = fruitesObj.map((element)=> {
        return element.name
    })
    return fruiteName
} 

//console.log(fruitesArr(fruitesObj)) 

// .reduce((accumulator, element, index, array)=> {

//} initial value) initializing the accumulator

let nums = [1, 2, 3, 4, 5] 

// result = nums.reduce((accumulator, current)=> {
//     return accumulator + current
// })  //=> 20

// result = nums.reduce((accumulator, current)=> {
//     return accumulator + current
// }, 10) //=> 30 initialize the accumulator starts with 10 you can pass {} or [] as initial value

// console.log(result) 

// getting the average 

// let arr = [2, 4, 6, 8 ] 

// let avrg = arr.reduce((accumulator, currentElement, index, array)=> { 

//     accumulator += currentElement // add accumulator with the current value

//     if(index === array.length - 1){ // when it reaches to the final element
//         return accumulator / array.length
//     }
//     return accumulator // return accumulator
// }) 

// console.log(avrg) 

// flatten the array using reduce 

// let arr = [
//             [1,2,3], 
//             [4,5,6],
//             [7,8,9,10]
//          ] 
// console.log(arr)  

// let flat = arr.reduce((accumulator, element)=> { 
//     return accumulator.concat(element)
// },[]) 

// console.log(flat)

// sort() => does not return new array
// sort((a,b)=> { a - b})  //=> accending order  switch { b - c } for decending


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

 console.log(fruites)

