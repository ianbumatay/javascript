
// primative data are pass by values 
// objects are pass by reference  

// two different obj are not equal to each other 

var obj1 = {
    name: "mike"
} 

var obj2 = {
    name: "mike"
} 

//console.log(obj1 == obj2)  
//console.log(obj1 === obj2) //this will return false we need to stringifiy obj1 and obj2 to return true => JSON.stringify()


// Pass by values

// var string1 = "Ian" 
// console.log("string1:",string1) //=> Ian

// var string2 = string1  
// console.log("string2 = string1:",string2) //=> Ian


// string1 = "Bugoy" 
// console.log("string1 = Bugoy") //=> new value of string1 after re assigning is Bugoy 

// console.log("string2:", string2) //=> value of string2 never changes => Ian




console.log("---------------")

// Pass by reference  

var person1 = {
    name: "Ian",
    age: 33
}

var person2 = person1 // both are refering(or pointing the same object) to the same object

console.log("person1", person1) //=>  person1 { name: 'Ian', age: 33 }
console.log("person2", person2) //=>  person1 { name: 'Ian', age: 33 }


person1.name = "Bugoy"  // re assigning person1.name to Bugoy

 console.log("person1", person1) //=> person1 { name: 'Bugoy', age: 33 }
console.log("person2", person2)  //=> person1 { name: 'Bugoy', age: 33 }




