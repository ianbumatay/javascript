
const newBtn = document.createElement("button") 
newBtn.id = "btn" 
newBtn.innerText = "Click Me!"


divButton.appendChild(newBtn) 

newBtn.addEventListener('click', handleClick) 

function handleClick(event){

    console.log(event)

}