



// arr = [1,2,3,4,5]

// function loop(arr){

//     for(let i=0; i <= arr.length - 1;  i++){ 

//      console.log("-------")    
//      console.log("index", i) 
//      console.log("-------") 
//      console.log("element", arr[i])  
//      console.log("-------") 
//      console.log("array", arr) 
//      console.log("-------") 
//      //console.log("length", arr.length)
    
//     }

// } 

// loop(arr)



// function regular(){
//     console.log("regular",this)
// } 
// regular() 

// const express = function(){
//     console.log("express", this)
// } 

// express() 

// const arrow = () => {
//     console.log("arrow", this)
// } 

// arrow() 

// inside object literal 

const objTest = { 

    regular(){
        console.log("regular", this)
    } 

    // arrowFunc:()=> { 
    //     console.log("arrow", this)
    // }

} 

objTest.regular() // will refer to the currrent context. the object itself 

//objTest.arrowFunc() //=> window 




