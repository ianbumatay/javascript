 
 // Constructor Function 

  function User(firstName, lastName, age, gender){
      this.firstName = firstName
      this.lastName = lastName 
      this.age = age
      this.gender = gender 
      //console.log(this) // "this keyword constructor refers to the object that is created",
  } 

  // creating instance of a user 

  var user1 = new User("Ian", "Bumatay", 33, "Male") 
  //console.log(user1) 

  var user2 = new User("Jada", "Bumatay", 32, "Female") 
  //console.log(user2) 

  var user3 = new User("Jade", "Bumatay", 2, "Female")
  //console.log(user3) 

  //Prototype Object 

  User.prototype.emailDomain = "@facebook.com" 
  user1.emailDomain 
  //console.log(user1.emailDomain) //=> @facebook.com 

  User.prototype.getEmailAddress = function(){
      return this.firstName + this.lastName + this.emailDomain
  }
  user1.getEmailAddress
  //console.log(user1.getEmailAddress)
