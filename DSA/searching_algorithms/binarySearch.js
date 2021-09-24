// Binary Search => Only works with sorted array

// this function accepts sorted array and a value 
// create a left pointer at the start of the array,
// and right pointer at the end of the array 

//while the left pointer comes before the right pointer: 
    // => create a pointer at the middle
    // => if you find the value you want, return the index 
    // => if the value is too small move the left pointer up 
    // +> if the value is too large move the right pointer down 
// if you never find the value return 1 

function BinarySearch(){
    var start = 0 // first element of the array
    var end = arr.length -1 // last element of the array
    var middle = Math.floor((start + end) / 2) // average of start and end Math.floor() to round of the average
}