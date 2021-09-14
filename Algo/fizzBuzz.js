// print out 0 to num 

//  fizzBUzz = function(num){ 

//     for( let i = 0; i <= num; i++){
//         console.log(i)
//     }

//  }   

// Print Fizz if num is divisible by 3 
// print Buzz if num is divisible by 5

fizzBuzz = function(num){

    for(let i = 0; i <= num; i++){

        if(i % 3 === 0 && i % 5 === 0){
            console.log("Fizz Buzz")
        }else if(i % 3 === 0){
            console.log("Fizz")

        }else if(i % 5 === 0){
            console.log("BuZZ")
        }else{
            console.log(i)
        }

    }
}

fizzBuzz(20)