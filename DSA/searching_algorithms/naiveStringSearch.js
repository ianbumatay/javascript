// Naive String Search 


// Loop over the over the longer string 
// then loop over the shorter string 
//

function naiveString(long, short){  

    var count = 0 // setting a variable count to = 0

    for(var i = 0; i < long.length; i++){ 
        //console.log(i)  

        for(var j = 0; j < short.length; j++){  
            //console.log(short[j], long[i + j] ) 

            if(long[i + j] !== short[j]){ // if the element in the short string is NOT EQUAL to the element in the long string at index + 1
                break                     // break out the loop 
            }
            if( j === short.length - 1 ){ // if the element in the first index Matches to the element in the last index - 1
                count ++                  // increment count
            }
        }
    } 
    return count;
} 

 let result = naiveString("lorie loled", "lo") 
 console.log(result)