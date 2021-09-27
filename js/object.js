// Creating Obj 

// 1.] Object Literal syntax 

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

// 2.] New keyword  => 

const student = Object.new 

//creating properties 
student.name = "Ian" 
student.lastName = "Bumatay"
student.gpa = 3
student.subjects = ["Math", "Programming", "Algorithm"]

// methods 
student.getSubjects = function(){
    return this.subjects
}
