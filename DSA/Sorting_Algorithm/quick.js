// Quick Sort 



// Pivot psuedocode   
// take in 3 arguments an array, start index(default to 0) and end index (default to arr.length - 1)
// grab the pivot from the start of the array( index 0 )  
// store the current pivot index in variable (this will keep track of  where the pivot should end up) 
// loop throught the array from the start till the end 
//  => if the pivot is greater than the current element increment the pivot index variable 
//  => and then swap the current element with the element at the pivot index 
// swap the starting element(the pivot) with the pivot index 
// return the pivot index 



function pivot(arr, start = 0, end = arr.length + 1){  

    function swap(array, i, j){
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    var pivot = arr[start]
    var swapIdx = start 

    for( var i = start + 1; i < arr.length; i++){ // increment everything after start

        if(pivot > arr[i]){ // if pivot is greater the the element 
            swapIdx++ // increment swap index by 1
            swap(arr, swapIdx, i) // swap the starting element(the pivot) with the pivot index  
            //console.log()
        }
    } 
    swap(arr, start, swapIdx) 
    return swapIdx

} 

result = pivot([4,8,2,1,5,7,6,3])  
console.log(result) // should return swapInx = 3 


//Quick Sort function 

function quickSort(arr, left = 0, right = arr.length - 1){

    // stop action to prevent loop
    if(left < right){ // if left is less than right(true) run the code below

        let pivotIndex = pivot(arr, left, right) //=> 3 
        //left 
        quickSort(arr, left, pivotIndex-1); 
        //right 
        quickSort(arr, right, pivotIndex+1);
    } 
    return arr;
} 

console.log(quickSort([4,8,2,1,5,7,6,3]))




