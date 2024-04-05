//adding items
var addBtn = document.getElementsByTagName('input')[0];
var webList = document.getElementById('webList');

function addItem(){
    var newItem = prompt("Add New Item:");
    var newLiItem = document.createElement("li");
    var newLiText= document.createTextNode(newItem);
    newLiItem.appendChild(newLiText);
    webList.appendChild(newLiItem);
}

addBtn.addEventListener('click', addItem, false);

//deleting SPECIFIC item

    //function will get value of 'e' or the target of the event
    //e for event    
function getTarget(e){
    if(!e) {
        e=window.event;
    }

    return e.target || e.srcElement;
}

function deleteItem(e) {
    var target = getTarget(e);
    var tParent = target.parentNode;
    console.log(target);
    console.log(tParent);

    tParent.removeChild(target);
}

webList.addEventListener('click', deleteItem, false);