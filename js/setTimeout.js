
// Wich of the statement will logout first 

console.log(1) 
setTimeout(function(){console.log(2)}, 1000) 
setTimeout(function(){console.log(3)}, 0) 
console.log(4) 

//=> 1 4 3 2
// event loop 