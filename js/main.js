
const divTitle = document.querySelector("#div-title")

const divNames = document.querySelector("#div-names") 

const divForm = document.querySelector("#div-form") 

const divButton = document.querySelector("#div-btn")


const title = document.getElementById("title")
//const title = document.querySelector("#title") 

title.innerText = "Javascript Playground"  

 


const div = document.getElementById("#div") 

window.addEventListener("keydown", move) 

function move (e){
    if(e.keyCode == 68){
        //console.log("you press letter D")  
        div.style.transform = "translate(40vw)"

    }
} 

document.addEventListener('keydown', function(e) {
    console.log(e.which)
  })  


  const head = document.querySelector("h1") 

  function headerAttribute(){
    head.setAttribute("role", "presentation")
  }


