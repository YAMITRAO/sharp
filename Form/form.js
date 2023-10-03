

//selection of input 
let formSelection = document.querySelector("#my-form");
let nameSelection = document.querySelector("#name");
let emailSelection = document.querySelector("#email");

// ul selection 
let div = document.querySelector("#users");

formSelection.addEventListener('submit', onSubmit);

let data = [
]

if(localStorage.length > 0){
    data = JSON.parse(localStorage.getItem("usersData"));
    JSON.parse(localStorage.getItem("usersData")).forEach( (item) => {
        let createDiv = document.createElement("div");
        let createh3 = document.createElement("h3");
        let createp = document.createElement("p");
    
        createDiv.className = "user";
        createh3.appendChild(document.createTextNode(item.name));
        createh3.style.color ="rgba(150,160,100, 0.9)"
        createp.appendChild(document.createTextNode(item.email));
        createp.style.color = " rgba(10,75,80, 0.7)"
    
        createDiv.appendChild(createh3);
        createDiv.appendChild(createp);
    
        div.appendChild(createDiv);
    });
}



function onSubmit(e){
    e.preventDefault(); 

    let userDetails = {
        name : nameSelection.value,
        email : emailSelection.value,
    } 
    data.push(userDetails);

    localStorage.setItem("usersData",JSON.stringify(data));
    
    div.innerHTML="";


 JSON.parse(localStorage.getItem("usersData")).forEach( (item) => {
        let createDiv = document.createElement("div");
        let createh3 = document.createElement("h3");
        let createp = document.createElement("p");
    
        createDiv.className = "user";
        createh3.appendChild(document.createTextNode(item.name));
        createh3.style.color ="rgba(150,160,100, 0.9)"
        createp.appendChild(document.createTextNode(item.email));
        createp.style.color = " rgba(10,75,80, 0.7)"
    
        createDiv.appendChild(createh3);
        createDiv.appendChild(createp);

        div.appendChild(createDiv);
        
        nameSelection.value = "";
        emailSelection.value = "";

    });

    // nameSelection.value = "";
    // emailSelection.value = "";
    
}