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

// unshift() add one or more element in the begining of an array and return new length. 
// let withGrandma = names.unshift("Grandma Annie")  
// console.log(withGrandma) 

// let withFam = names.unshift("Daddy","Mommy") 
// console.log(withFam) 

// console.log(names) // mutate the original array 

// // ,push() add one or more element at the end of an array and return new length. 

// let addFromBehind = names.push("Unle", "Auntie") 
// console.log(addFromBehind)

// console.log(names) // mutate the original array  


// // shift and pop  remove elements from array returns the element that is remove from array, mutate original array

// let removeFirst =  names.shift()
// console.log(removeFirst) 

// let removeLast = names.pop()
// console.log(removeLast)
 

//console.log(names) // mutate the original array   

// .splice()  arr.splice(start[deleteCount[value,...,valueN]]) 


 
// let stringOfNums = ["one","two","four", "five"] 

// console.log(stringOfNums.splice(2, 0, "three")) // insert, returns [] 
// console.log(stringOfNums) 

// console.log(stringOfNums.splice(2,1,3)) 
// console.log(stringOfNums)  

// console.log(stringOfNums.splice(stringOfNums.length, 0, "six",7,8,9))// adding element from behind
// console.log(stringOfNums) 

// console.log(stringOfNums.splice(1,2)) //delete element starting from index given returns the element that is left from array
// console.log(stringOfNums)
 

// Search Operation in array  

let fruites = ["Orange", "Apple","Banana","Melon", "Citrus", "Grapes"]
            //    0        1       2        3         4         5

// indexOf()
// syntax => indexOf(searchElement[fromIndex]) => returns the index of element 
// No result == -1 
// more than 1 matches found, it will return the index of first element found  

let apple = fruites.indexOf("Apple", 0)  //=> 0 is default 
//console.log(apple) // returns 1

// lastIndexOf()
// syntax => lastIndexOf(searchElement[fromIndex]) by default array.length - 1 

let melon = fruites.lastIndexOf("Citrus") 
//console.log(melon)


// .includes()
// syntax => .includes(searchElement[startIndex]) 
// returns boolean values 

let banana = fruites.includes("Banana",3) // returns false because search started in the index number 3 
console.log(banana)


 



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

