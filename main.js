// counter  

// get element 
// listen to event 
// create counter function  

let countElement = document.getElementById("count-el") 

console.log(countElement)


let count = 0 

function increment(){
    count = count + 1 
    //console.log(count) 
    countElement.innerText = count
} 

increment()