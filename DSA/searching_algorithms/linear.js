
// Linear Search 

// example JS array methods are: 
// find() => return the first element found
// findIndexOf() =>
// indexOf() => index of element found
// .includes() => boolean value 


// Exercise 1  


// write a function that find num 5 
// loop through elements of the array 
// if found return index of element  else return -1  



function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([34,51,1,2,3,45,56,687], 1))

