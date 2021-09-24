
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



function linear(arr, val){

    for(var i = 0; i < arr.length; i++){ // loop through the array from begining to end

        if(arr[i] === val){ // if array element is equals to the value return the index of array
            return i
        }
    }
    return -1    // element not found return -1
} 

console.log(linear([2, 40, 1, 3, 5, 21, 10, 6 ], 100))   
         // index   0   1  2  3  4   5  6   7

         // 0(n) 
         // as n grows the length of array grows so does the amount of time (n === input )

