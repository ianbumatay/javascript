
// Bubble sort => a sorting algorithm where the largest values (element) bubble up to the top(at the end of array)  
// as we loop through items we compare the current item to next item 
// AKA singking sort 


// if current item is larger than the next item 
// swap item (larger going to the right) 

// swap funtion 

// function swap(temp, currentElement, nextElement){ 
//     let temp = currentElement
//     currentIdx = nextElement
//     nextElement = temp
// } 

// function bubbleSort(arr){

//     for(var i = 0; i < arr.length; i++){     // loop every element in the array starting index 0 (i = 0) to the last element in the array (arr.lenth)

//         for(var j = 0; j < arr.length; j++){   // loop every element in array that is not sorted

//             if(arr[j] > arr[j + 1]){        // if current element (arr[j])  is greater than next element (arr[j + 1])
//                  // swap                    // swap elements 
//                  let temp = arr[j]
//                  arr[j] = arr[j+1]
//                  arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// } 

// let result = bubbleSort([37, 45, 39, 8])
// console.log(result) //=> [ 8, 37, 39, 45 ] 

// Bubble sort Optimization 

function OptimizeBubbleSort(arr){ 

    for(var i = arr.length; i > 0; i--){  // arr.length = 4

        for(var j = 0; j < i - 1; j++){ 

            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr 
} 

let result = OptimizeBubbleSort([37, 45, 39, 8])
console.log(result) //=> [ 8, 37, 39, 45 ] 