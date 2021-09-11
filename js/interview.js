




// function createButtons() {
//     for (var i = 1; i <= 5; i++) { //=> change var to let
//       var body = document.getElementsByTagName("BODY")[0];
//       var button = document.createElement("BUTTON");
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function() {
//            alert('This is button ' + i);
//       }
//       body.appendChild(button);
//     }
//  }
  
//  createButtons(); 

 
// The "this" keyword in js => refers to the obj it belongs to

// dog = {
//     name: "fido" ,
//     age: 3, 

//     showThis(){
//         console.log(this)
//         console.log(this.name, this.age)
//     },

//     bark(){
//        console.log("woof woof")
//     } 
//} 
//
// console.log(dog.name)
// console.log(dog.age) 
// console.log(dog.bark()) 

//console.log(dog.showThis())


 
// Hoisting 

// const getProduct = function(num1, num2){
//     return num1 * num2
// } 

// annonymous function 

// let show = function(){ 
//     console.log("Annonymouse function")
// } 

// show() 


// Problem squares of sorted array

// function sortedSquares(numArray){
//     return numArray.map((e)=> {
//         return e * e
//     }).sort((a,b)=> {
//          return  a - b
//     })

// }
// console.log(sortedSquares( [-4, -1, 0, 3, 10])) 

//=> [ 0, 1, 9, 16, 100 ] time complexity O(nlogn) 

// Two pointers Approach 

const sortedSquares = (numArray) => {
    let result = []
    let start = 0 
    let end = numArray.length - 1 
    let position = end 

    while(start <= end){ 

        if(numArray[start] ** 2 > numArray[end] ** 2){
            result[position--] = numArray[start++] ** 2

        }else{
            result[position--] = numArray[end--] ** 2
        }
    } 
    return result
} 

console.log(sortedSquares( [-4, -1, 0, 3, 10])) 

//=> [ 0, 1, 9, 16, 100 ] time complexity O(n) 
