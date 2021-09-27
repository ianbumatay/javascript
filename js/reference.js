
// primative data are pass by values 
// objects are pass by reference  

// two different obj are not equal to each other 

var obj1 = {
    name: "mike"
} 

var obj2 = {
    name: "mike"
} 

console.log(obj1 == obj2)  
console.log(obj1 === obj2) 


// Pass by values

var string1 = "Ian" 
var string2 = string1 

console.log("string1", string1) 
console.log("string2", string2) 



string1 = "Bugoy" 
console.log("string1", string1) 
console.log("string2", string2) 



console.log("---------------")

// Pass by reference  

var person1 = {
    name: "Ian",
    age: 33
}

var person2 = person1 // both are refering to the same object

console.log("person1", person1)
console.log("person2", person2)


//
person1.name = "Bugoy" 

console.log("person1", person1)
console.log("person2", person2)




