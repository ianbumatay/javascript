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


// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);

//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// } 

// binarySearch([2,5,6,9,13,15,28,30], 103)

function BinarySearch(arr, element){

    var start = 0 // first element of the array
    var end = arr.length -1 // last element of the array
    var middle = Math.floor((start + end) / 2) // average of start and end Math.floor() to round of the average
  

    while(arr[middle] !== element && start <= end){ // while middle element is not equal to the element  where looking for loop through the array

        //console.log(start, middle, end) 
            
        if(element < arr[middle]){   // if element is less than the middle element in the array
            end = middle - 1         
        }else{
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    //console.log(start, middle, end)
    if(arr[middle] === element){
        return middle
     } 
     return -1
   
} 

result = BinarySearch([2,5,6,9,13,15,28,13], 28)
console.log(result)
                    
                     // 0         3               7
                    // [2 , 5, 6, 9, 13, 15, 28, 13]     first loop 
                    //  S         M              E 

                    //               4    5       7
                    // [2 , 5, 6, 9, 13, 15, 28, 13]      second loop 
                    //                S   M      E