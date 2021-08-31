names = ["Ian", "Jada", "Jade"] 

names.forEach(name => {
    const newUl = document.createElement("ul") 
    const newLi = document.createElement("li") 

    divNames.appendChild(newUl)
    newUl.appendChild(newLi)  

    newLi.innerText += name

})