
// Curried function = sequence of function with 1 or more arguments

// Problem 1
// Singly and doubly invoke 

// function addNum(num1, num2){
//     return num1 + num2
// }  

// console.log(addNum(10,20)) 

// function addNumCurry(num1){
//     return function(num2){
//          return num1 + num2 
//     }
// }  

// problem 4  addNUM(10)(1) = 11


// Problem 2
//tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together   

// const tripleAdd =(a)=> { // function 1

//     return (b)=>{ // function 2
//         return (c)=>{ // function 3
//             return a + b + c
//         }
//     }
// } 

// console.log(tripleAdd(10)(20)(30)) //=> 60 

// // problem 3
// function addNum(a){ 
//     return function(b){ 
//         return a + b
//     }
// } 

// const num1 = addNum(10) //=>  storing in the lexical environment
// const ans = num1(1) 
// console.log(ans) 


// Practical use of currying function.  

const discountCalculator = (price) => { 

    return (percentage)=> {
        return price * percentage
    }
} 

 const discountPrice = discountCalculator(300)
 
 console.log(discountPrice(.10))
 console.log(discountPrice(.20))
 console.log(discountPrice(.50))

// function getTravelTime(distance, speed){
//     return distance / speed
// } 

// // Solution 

// function getTravelTime(distance){
//     return function(speed){
//         return distance / speed
//     }
// } 

// const travelTimeBosNyc = getTravelTime(400) 
// const travelTimeDcNyc = getTravelTime(200) 
//=> passing the distance parameter @ 400km and assigning it to a variable travelTimeBosNyc

//console.log(travelTimeBosNyc(50), "hours") //=> passing the speed @ 50km/hr
//console.log(travelTimeDcNyc(50),"hours")  



