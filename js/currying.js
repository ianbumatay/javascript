
// Curried function = sequence of function with 1 or more arguments

// Problem 1
//tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together   


// const tripleAdd =(a)=> {

//     return (b)=>{
//         return (c)=>{
//             return a + b + c
//         }
//     }
// } 

//console.log(tripleAdd(10)(20)(30)) //=> 60 


//  Problem 2
// function getProduct(num1){

//     return function(num2){
//         return num1 * num2
//     }
// } 

//console.log(getProduct(2)(2)) 

// Problem 3 Practical use of currying function. 

function getTravelTime(distance, speed){
    return distance / speed
} 

// Solution 

function getTravelTime(distance){
    return function(speed){
        return distance / speed
    }
} 

const travelTimeBosNyc = getTravelTime(400) 
const travelTimeDcNyc = getTravelTime(200) 
//=> passing the distance parameter @ 400km and assigning it to a variable travelTimeBosNyc

console.log(travelTimeBosNyc(50), "hours") //=> passing the speed @ 50km/hr
console.log(travelTimeDcNyc(50),"hours") 

