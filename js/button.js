
const newBtn = document.createElement("button") 
newBtn.id = "btn" 
newBtn.innerText = "Click Me!"


divButton.appendChild(newBtn) 

newBtn.addEventListener('click', function(e){
    console.log(e.target)
}) 

const bubble = document.querySelector("#bubble")

bubble.addEventListener('click', function(e){
    console.log("event bubling clicked", e.target)
}) 


//Event bubbling 

const parentDiv = document.querySelector("#parent") 

parentDiv.addEventListener('click',function(e){
    //console.log(e.target)

    if(e.target.id === "alert"){
       alert("ALERT BUTTON CLICKED")
    }
    if(e.target.id === "console"){
       console.log("CONSOLE BUTTON CLICKED")
    }
    if(e.target.id === 'error'){
        console.error("ERROR BUTTON CLICKED")
    }

})