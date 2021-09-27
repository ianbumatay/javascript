// Creating Obj 

// Object Literal syntax 

var dog = {
    // object properties
    id: 1, 
    name: "Bugoy", 
    breed: "poodle", 

    // object methods
    Bark(){
        console.log("woof, woof")
    }, 

    getName(){
       return this.name
    }
}