//Arrays  

 let arr = ["hello", 5 , true, "last element"]  //literal
//     //index   0     1    3       4
// let arr = new Array // class 

// let firstArr = arr[0] // get the first element   
// console.log(firstArr)

// let arrayLen = arr.length // => 3 elemnts in arr 
// console.log(arrayLen)

// let lastArr = arr[arr.length - 1] // get the last element of an array  
// console.log(lastArr) 

// Arrays of object
// let arrObj=[
//     {id: 1, name: "Ian"},
//     {id: 2, name: "Jada"},
//     {id: 3, name: "Jade"}
// ] 

// console.log(arrObj) //=> access all obj 
// console.log(arrObj[2]) // access third obj 
// console.log(arrObj.name) // access name property of an obj


// Traversing or Navigating  

  names = ["Jade", "Philip", "ericka", "Pheobe"] 

// // using for loop
// for(let i = 0; i < names.length; i++){
//    console.log(names[i]) // iterate every single element return element
// }  

// // for of return values
// for(let e of names){
//     console.log(e)
// }


// // for in returns index number of an element
// for(let e in names ){ 
//     console.log(e)
// } 

// names.forEach((name, index)=> { 
//     console.log(name,index)
// }) 

// Adding elements to an array 
// unshift() and push()  

let withGrandma = names.unshift("Grandma Annie")  
console.log(withGrandma)






// Reversing array .reverse() 

//let numbers = [1,2,3,4,5] 

//let modifyNum = numbers.reverse()  //=>  [ 5, 4, 3, 2, 1 ]  // modify array

//let newNum = [...numbers].reverse() // 

// console.log(numbers) 
// console.log("----------") 
// //console.log(modifyNum)
// console.log("----------") 
// console.log(newNum)

// using slice to .slice() and reverse()
// let sliceNum = numbers.slice().reverse() // slice returns new array
// console.log(sliceNum) 
// console.log(numbers) 

// Using for loop  

// function reverseArray(numbers){ 
    
//     let newArray = []

//     for(let i = numbers.length - 1; i >= 0; i -- ){
//         newArray.push(numbers[i])
//     }
//     return newArray
// } 

// console.log(reverseArray([1,2,3,4,5]))


// writing own reverse function 

let numbers = [1,2,3,4,5] 
            // 0 1 2 3 4 

// function reverseNumbers(numbers){
//     let leftIndex = 0 
//     let rightIndex = numbers.length - 1 

//     //console.log(rightIndex) 

//     while(leftIndex < rightIndex){ // if left index less than right index 

//         // swap the elements with the temp variable
//         let tempVar = numbers[leftIndex] 
//         //console.log(tempVar)
//         numbers[leftIndex] = numbers[rightIndex] // set right index to left index
//         //console.log(numbers[leftIndex])
//         numbers[rightIndex] = tempVar  // set temp var to right index
//         console.log(numbers[rightIndex])

       
//         // move variable to the middle 
//         leftIndex ++
//         rightIndex --

//     } 
// } 

// console.log(reverseNumbers(numbers))

