
// primative data are pass by values 
// objects are pass by reference 

// Pass by values

var string1 = "Ian" 
var string2 = string1 

console.log("string1", string1) 
console.log("string2", string2) 



string1 = "Bugoy" 
console.log("string2", string2) 



console.log("---------------")

// Pass by reference  

var person1 = {
    name: "Ian",
    age: 33
}

var person2 = person1 

console.log("person1", person1)
console.log("person2", person2)


//
person1.name = "Bugoy" 

//console.log("person1", person1)
console.log("person2", person2)




