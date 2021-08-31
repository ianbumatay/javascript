
const formTitle = document.createElement("h2")
divForm.appendChild(formTitle)
formTitle.innerText += "Form"

const newForm = document.createElement("form") 
newForm.id = "form" 

const textInput = document.createElement("input") 
textInput.id = "text-input"
textInput.type = "text"
textInput.placeholder = "Add Names Here!"

const submitInput = document.createElement("input")
submitInput.type = "submit"  

newForm.append(textInput, submitInput)


divForm.appendChild(newForm) 

//Events 

newForm.addEventListener('submit', handleSubmit) 

function handleSubmit(event){
    event.preventDefault() 



    //event.target.firstElementChild.value
    
    const inputValue = textInput.value
    //console.log(inputValue) 
    
    const newUl = document.createElement("ul")
    const newLi = document.createElement("li")
    newUl.append(newLi)
    newLi.innerText += inputValue 

    divNames.append(newUl)



// Using template literals

    // divNames.innerHTML += 

    // `<ul>
    //   <li>${inputValue}</li>
    // </ul>
    // `

}