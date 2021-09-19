
// What is undefined in Js == variable with no value

let x; // variable declaration 
console.log(x) //=> undefined
console.log(typeof x) //=> undefined  

let y = 9
console.log(x) //=> 9
console.log(typeof x) //=> number


// null == nothing

let a; 
//=> undefined 
let b = null 
//=> null 

// null and undefined represent nothingness  
// but contains diffrerent data types 
 
console.log(a == b) //=> true

console.log( a === b)// false with strict operator because of different data type 

// null is treated as a primitive data type 

// can you assign undefined to a variable? 
// answer: yes 
let x = undefined 