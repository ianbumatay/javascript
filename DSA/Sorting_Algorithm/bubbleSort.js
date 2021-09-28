
// Bubble sort => a sorting algorithm where the largest values (element) bubble up to the top(at the end of array)  
// as we loop through items we compare the current item to next item 
// AKA singking sort 


// if current item is larger than the next item 
// swap item (larger going to the right) 

////////////// swap funtion implementation

// ES5
// function swap(temp, currentElement, nextElement){ 
//     let temp = currentElement
//     currentIdx = nextElement
//     nextElement = temp
// }  

//ES15  swap arrow function
// const swap = (temp, idx1, idx2) => {
//     [arr[idx1], arr[idx2] = arr[idx2], arr[idx1]]
// }

///////////////////////

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

/////////////////////////  Bubble sort Optimization 

function OptimizeBubbleSort(arr){  
 
    var noSwaps

    for(var i = arr.length; i > 0; i--){  // loop from the end of array toward the beginning
         noSwaps = true
        for(var j = 0; j < i - 1; j++){   // start an inner loop with a variable called j from the beginning until i - 1 (arr.length - 1)
            console.log(arr, arr[j], arr[j + 1])
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
        //console.log("One pass complete")
    }
    return arr 
} 

let result = OptimizeBubbleSort([37, 45, 39, 8])
console.log(result) //=> [ 8, 37, 39, 45 ]  


// Big 0 => 2(n) if the array is not sorted and if the array id nearly sorted it would be linear or 0(n)