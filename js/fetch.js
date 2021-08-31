

// fetch(url)
// .then( response => response.json)
// .then(response => {}) 



// fetch(url, {method: 'GET'})
//   .then(function(response){
//      return response.json()
//  }) 
//    .them(function(jsonData){
//       // array data 

//    })  

url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

// const promise = fetch(url, {method: "GET"})
// console.log(promise) 

const fetchBtn = document.querySelector("#fetch-btn") // grab the button
fetchBtn.addEventListener("click", handleClick )      // add events to the button

function handleClick(){  // function that handle click to fetch the data
    fetch(url) 
    .then( res => res.json()) 
    .then( jsonData => {
         //console.log(jsonData)
        const fetchParent = document.querySelector("#fetch-parent").firstElementChild 
        fetchParent.innerText = jsonData
    })
}