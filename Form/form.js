

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
        let createBtn = document.createElement("button");
        let createEdit = document.createElement("button");

        createEdit.className = "editBtn";
        createEdit.id = "editBtn";
        createEdit.innerText = "edit"

        createBtn.className ="deleteBtn";
        createBtn.id = "deleteBtn";
        createBtn.innerText = "delete"
        createDiv.className = "user";
    
        createDiv.className = "user";
        createh3.appendChild(document.createTextNode(item.name));
        createh3.style.color ="rgba(150,160,100, 0.9)"
        createp.appendChild(document.createTextNode(item.email));
        createp.style.color = " rgba(10,75,80, 0.7)"
    
        createDiv.appendChild(createh3);
        createDiv.appendChild(createp);
        createDiv.appendChild(createBtn);
        createDiv.appendChild(createEdit);
    
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
        let createBtn = document.createElement("button");
        let createEdit = document.createElement("button");

        createEdit.className = "editBtn";
        createEdit.id = "editBtn";
        createEdit.innerText = "edit"

        createBtn.className ="deleteBtn";
        createBtn.id = "deleteBtn";
        createBtn.innerText = "delete"
        createDiv.className = "user";
        createh3.appendChild(document.createTextNode(item.name));
        createh3.style.color ="rgba(150,160,100, 0.9)"
        createp.appendChild(document.createTextNode(item.email));
        createp.style.color = " rgba(10,75,80, 0.7)"
    
        createDiv.appendChild(createh3);
        createDiv.appendChild(createp);
        createDiv.appendChild(createBtn);
        createDiv.appendChild(createEdit);
        div.appendChild(createDiv);

        nameSelection.value = "";
        emailSelection.value = "";

    });

    // nameSelection.value = "";
    // emailSelection.value = "";
    
}


//delet operation on selected 

div.addEventListener('click', onClick);

function onClick(e){

    if(e.target.className == "deleteBtn" || e.target.className == "editBtn"){

        let targetName = e.target.parentElement.firstChild.innerText;
        // let targetEmail = e.target.previousSibling.innerText;
        let targetEmail = e.target.parentElement.querySelector("p").innerText;
        data = JSON.parse(localStorage.getItem("usersData"));
        

        let tempArr = [];
        for(let i = 0; i<data.length; i++){
            if(targetName == data[i].name && targetEmail == data[i].email){
               continue
            }
            tempArr.push(data[i]);
        }
        // console.log(tempArr);
        data = tempArr;

        localStorage.setItem("usersData",JSON.stringify(data));
    
    div.innerHTML="";


 JSON.parse(localStorage.getItem("usersData")).forEach( (item) => {
        let createDiv = document.createElement("div");
        let createh3 = document.createElement("h3");
        let createp = document.createElement("p");
        let createBtn = document.createElement("button");
        let createEdit = document.createElement("button");

        createEdit.className = "editBtn";
        createEdit.id = "editBtn";
        createEdit.innerText = "edit"

        createBtn.className ="deleteBtn";
        createBtn.id = "deleteBtn";
        createBtn.innerText = "delete"
        createDiv.className = "user";
        createh3.appendChild(document.createTextNode(item.name));
        createh3.style.color ="rgba(150,160,100, 0.9)"
        createp.appendChild(document.createTextNode(item.email));
        createp.style.color = " rgba(10,75,80, 0.7)"
    
        createDiv.appendChild(createh3);
        createDiv.appendChild(createp);
        createDiv.appendChild(createBtn);
        createDiv.appendChild(createEdit);
        div.appendChild(createDiv);

       
    });
    if(e.target.className == "editBtn"){
        nameSelection.value = targetName;
        emailSelection.value = targetEmail;
        
    
    }
    else{
        nameSelection.value = "";
        emailSelection.value = "";

    }
}
};

