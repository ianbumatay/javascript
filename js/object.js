// Creating Obj 

// ------------- Object Literal syntax 

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

// ---------------  Using new keyword  => Object.new

const student = new Object()

//setting up properties 
student.name = "Ian" 
student.lastName = "Bumatay"
student.gpa = 3
student.subjects = ["Math", "Programming", "Algorithm"]

// methods 
student.getSubjects = function(){
    return this.subjects
} 

// -------------- Using a constructor function 


function Car(brand, color, year, engine){  // note: Carc onstructor function starts with capital letter   
// setting up properties
    this.brand = brand 
    this.color = color 
    this.year = year 
    this.engine = engine
} 

// creating methods
Car.prototype.getColor = function(){ // 
    return this.color
}  

Car.prototype.getEngine = function(){
    return this.engine
}

// creating a new Car object 

const Rav4 = new Car("Toyota", "Black", "2017", "v4") 

console.log(Rav4) 
console.log(Rav4.getEngine())  

// ----------------- Creating Object using class  

class Cat {

    // setting up properties
    constructor(name, breed){ 
        this.name = name 
        this.breed = breed
    }  

    // creating methods
    getName(){
        return this.name
    } 

    getBreed(){
        return this.breed
    }
}


g