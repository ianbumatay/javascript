



// arr = [1,2,3,4,5]

// function loop(arr){

//     for(let i=0; i <= arr.length - 1;  i++){ 

//      console.log("-------")    
//      console.log("index", i) 
//      console.log("-------") 
//      console.log("element", arr[i])  
//      console.log("-------") 
//      console.log("array", arr) 
//      console.log("-------") 
//      //console.log("length", arr.length)
    
//     }

// } 

// loop(arr)

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

// console.log(countDown(5,5)) 

// Write a jQuery or JS function that takes two integer parameters. Starting with the sum of
// your two parameters, print a countdown to the console (one second at a time) until the logs
// reach zero 

var seconds = 10;
    var timer = setInterval(function() {
       seconds--;
        if(seconds == 0) {
            document.write("done");
            clearInterval(timer);
        } else {
            document.write(seconds + " seconds left");
        }
}, 1000);