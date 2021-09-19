



// Write a jQuery or JS function that takes two integer parameters. Starting with the sum of
// your two parameters, print a countdown to the console (one second at a time) until the logs
// reach zero 


function countDown(num1, num2){ 
    var num = num1 + num2  
    var timer = setInterval(function(){
        num--
        if(num == 0){
          clearInterval(timer)
        }else{
            console.log(num)
        }
    },1000)
}

(countDown(5,5))
