

class User {

    constructor(username, email){ // defining properties to the instance
        //setup properties
        this.username = username 
        this.email = email
    } 

    //method
    login(){ //by using shorthand function the this keyword would be the object instance 
        console.log(`${this.username} just login`)

    } 

    logout(){
        console.log(`${this.username} just logout` )
    }
} 

const ian = new User("Ian", "email@ian.com") // object instance => new object created.
const jada = new User("Jada", "email@Jada.com") 
const jade = new User("Jade", "email@jade.com") 

//new key word 
// creates new empty object {} 
// it binds the value of 'this' to the new empty object {} 
// it calls the constructor function to 'build' the object

//console.log(jada, jade) 

ian.login() // you have to invoke  when call to execute code 
jada.logout() 


//super() => calls the constructor of the parent class