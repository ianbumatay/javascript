// Merge Sort Algorithm 

//merge function   

//  Merges two already sorted arrays
// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }
// merge([100,200], [1,2,3,5,6])


function merge(arr1, arr2){ 
    let results = [] // new array to house the sorted elements
    let startIndexOfArr1 = 0  // starting index of arr1
    let startIndexOfArr2 = 0  // starting index of arr2 

    while(startIndexOfArr1 < arr1.length && startIndexOfArr2 < arr2.length){ 

        if(arr1[startIndexOfArr1] < arr2[startIndexOfArr2]){  // if the first element of arr1 is less than the first element of array 2
            results.push(arr1[startIndexOfArr1])               // push the element of arr1 in the empty array
            startIndexOfArr1 ++                               // continue to iterate through elements
        } else{
            results.push(arr2[startIndexOfArr2])              // else push the element of arr2 in the empty array
            startIndexOfArr2 ++                              // continue to iterate through elements
        }

    } 
    while(startIndexOfArr1 < arr1.length){
        results.push(arr1[startIndexOfArr1])
        startIndexOfArr1 ++
    } 
    while(startIndexOfArr2 < arr2.length){
        results.push(arr2[startIndexOfArr2])
        startIndexOfArr2 ++
    } 
    return results // return results array

} 

result = merge([100,200], [1,2,3,5,6])
console.log(result)