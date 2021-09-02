
//Destructuring 

// Array

namesArray = ["Ian", "Jada", "Jade"]  

// let n1 = namesArray[0] //=> "Ian"
// let n2 = namesArray[1] //=> "Jada"
// let n3 = namesArray[2] //=> "Jade"  

let [n1, n2, n3] = namesArray


// Object 

namesObject = {id: 1, name: "Ian", role: "Daddy"} 

let {id, name, role} = namesObject 


// Spread Operator 

// namesObject  //=>  {id: 1, name: "Ian", role: "Daddy"} 

//let spreadCopy = {...namesObject} //=> {id: 1, name: "Ian", role: "Daddy"} 
// spreadCopy.name = "Jade"
//spreadCopy //=> {id: 1, name: "Jade", role: "Daddy"}  

//namesObject => {id: 1, name: "Ian", role: "Daddy"} // does not mutate the object. 


// Arrow function 

// function add2(n){
//     return n + 2
// }
 
// const add2 = (n) => {
//     return n + 2
// } 

// const add2 = (n) => n + 2 

// Class 

class Pet { 

    constructor(id, name, age){
        this.id = id
        this.name = name
        this.age = age

    } 

    // instance method
    bark(){
        console.log("Woof")
    }




} 

const eyan = new Pet(1, "Ian", 33)


