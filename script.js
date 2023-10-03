
// selection as of required

let formSelection = document.querySelector("#addForm");
let taskSelection = document.querySelector("#item");
let submitSelection = document.querySelector("#submit");
let ul = document.querySelector("#items");
let description = document.querySelector("#description")

//add edit button

// let temp ;
let liNodeList = document.querySelectorAll(".list-group-item");
for(let i = 0; i<liNodeList.length; i++){
    let editButton = document.createElement("button");
editButton.className="editButton";
editButton.innerText = "Edit";
    // console.log(liNodeList[i]);
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
    
    li.className = "list-group-item";
    // let text = document.createTextNode(taskSelection.value);
    // let descriptionText = document.createTextNode(description.value);
    let x = taskSelection.value +" "+ description.value;
    
    let editButton = document.createElement("button");
editButton.className="editButton";
editButton.textContent = "Edit";
li.append(document.createTextNode(x));
    // li.appendChild(text);
    // li.appendChild(descriptionText);
    li.appendChild(removebtn)
    li.appendChild(editButton);
    
    ul.appendChild(li);

}

function onClickBtn(e){
    if(e.target.classList.value == "btn btn-danger btn-sm float-right delete"){
        console.log("clicked on button");
        e.target.parentElement.remove();
    };

}

//filter concept here 

let filterSelection = document.querySelector("#filter");

filterSelection.addEventListener('keyup', keyChange);

function keyChange(e){

    let enteredValue = e.target.value.toLowerCase();
    let allLi = document.querySelectorAll(".list-group-item");
    allLi.forEach( (item) => {
        let y = item.firstChild.textContent.toLowerCase();
        console.log(y.indexOf(enteredValue));
        if(y.indexOf(enteredValue) != -1 ){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    })
    
}


