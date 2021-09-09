// fizzBuzzz 


const fizzBUzz = (num) => { 

    for(let i = 0; i <= num; i++){ 
        
        // Check the number is multiple by 3 and 5 
        if( i % 3 === 0 && i % 5 === 0){
            console.log("fizzBuzz")
        
        // check if the number is multiple of 3
        }else if( i % 3 === 0){
            console.log("fizz")

        // check if the number is multiple of 5
        }else if( i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }

    }

} 

fizzBUzz(15)