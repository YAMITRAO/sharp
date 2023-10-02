
// selection as of required

let formSelection = document.querySelector("#addForm");
let taskSelection = document.querySelector("#item");
let submitSelection = document.querySelector("#submit");
let ul = document.querySelector("#items");

//add edit button

// let temp ;
let liNodeList = document.querySelectorAll(".list-group-item");
for(let i = 0; i<liNodeList.length; i++){
    let editButton = document.createElement("button");
editButton.className="editButton";
editButton.innerText = "Edit";
    console.log(liNodeList[i]);
     liNodeList[i].appendChild(editButton);
    // console.log(temp);
}

//apply event listner 

formSelection.addEventListener('submit', onSubmit);
ul.addEventListener('click', onClickBtn);


   

    

    


function onSubmit(e){
    e.preventDefault();

    //create li 
    let li = document.createElement("li");
    let removebtn = document.createElement("button");
    removebtn.className = "btn btn-danger btn-sm float-right delete";
    removebtn.innerText ="X";
    li.appendChild(removebtn)
    li.className = "list-group-item";
    let text = document.createTextNode(taskSelection.value);
    let editButton = document.createElement("button");
editButton.className="editButton";
editButton.innerText = "Edit";
    li.appendChild(editButton);
    li.appendChild(text);
    ul.appendChild(li);

}

function onClickBtn(e){
    if(e.target.classList.value == "btn btn-danger btn-sm float-right delete"){
        console.log("clicked on button");
        e.target.parentElement.remove();
    };
    



}

//


