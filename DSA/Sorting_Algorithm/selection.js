// selection sort algorithm => select the lowest element and then place the element in beginning of the array (index 0)


function selectionSort(arr){



    for(var i = 0; i < arr.length; i++){ // loop each element in array starting index 0

        var lowest = i  //  is the lowest number sorted at the position i = index 0

        for(var j = i + 1; j < arr.length; j++){
            //console.log(i, j) 
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        } 
        if( i !== lowest){
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

result = selectionSort([34, 22, 10, 19, 17]) 
console.log(result) 


// Big O => 0(n2)