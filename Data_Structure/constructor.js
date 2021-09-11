 
 // Constructor Function 
 
  function User(firstName, lastName, age, gender){
      this.firstName = firstName
      this.lastName = lastName 
      this.age = age
      this.gender = gender
  } 

  // creating instance of a user 

  var user1 = new User("Ian", "Bumatay", 33, "Male") 
  console.log(user1) 

  var user2 = new User("Jada", "Bumatay", 32, "Female") 
  console.log(user2) 

  var user3 = new User("Jade", "Bumatay", 2, "Female")
  console.log(user3)