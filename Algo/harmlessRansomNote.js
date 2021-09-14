
function harmlessRansomNote(noteText, magazineText){ 
    var noteArray = noteText.split(' ') 
    var magazineArray = magazineText.split(' ') 
    var magazineObj = {} 

    magazineArray.forEach(function(word){

        // if word is not present on magazineObj 
        // make it a property on the current obj or set it to 0
        if(!magazineObj[word]){ // if word is not inmagazineObj
            magazineObj[word] = 0 // set it to properties = 0
            magazineObj[word] ++ // increment count
        }   
    }) 
    //console.log(magazineObj) 

    var noteIsPossible = true
    noteArray.forEach(function(word){ 
        if(magazineObj[word]){
            magazineObj[word] -- 
            if(magazineObj[word] < 0) noteIsPossible = false   
        }else{
            noteIsPossible = false
        }
    }) 
    return noteIsPossible

} 

console.log(harmlessRansomNote('', 'This is all the magazine text in the magazine'))