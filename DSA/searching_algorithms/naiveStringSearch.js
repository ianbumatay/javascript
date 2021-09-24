// Naive String Search

function naiveString(long, short){  

    var count = 0

    for(var i = 0; i < long.length; i++){ 
        //console.log(i)  


        for(var j = 0; j < short.length; j++){ 
            //console.log(short[j], long[i + j] ) 

            if(short[j] !== long[i + j]){
                //console.log("Break out the loop")
                break
            }
            if( j === short.length - 1 ){
                count ++
            }
        }
    } 
    return count;
} 

 let result = naiveString("lorie loled", "lo") 
 console.log(result)