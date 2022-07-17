var containerEl;

var containerDiv = document.querySelector(".container"); 

var savedPostersLS = JSON.parse(localStorage.getItem("local-Posters"));

console.log(savedPostersLS); 

for(var i = 0; i < savedPostersLS.length; i++){
    
    var image = savedPostersLS[i].image; 
    var quote = savedPostersLS[i].quote;
    var titleEl = savedPostersLS[i].title; 

    var template = `
    <div>
        <img class="image" src="${image}">
        <div>${titleEl}</div>
        <div>${quote}</div>
    </div>
    `;

    containerDiv.innerHTML += template; 
}