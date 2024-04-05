//Get Day
var today = new Date();
var thisDay = today.getDay();
console.log(thisDay);

//Days of the Week Array
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//Print out the Days of the week on separate lines
var daysList = "<hr/>";
for(var i=0; i<daysOfWeek.length;i++){
    daysList+="<br/>" + daysOfWeek[i]+ "<br/>";
    // if(i==thisDay) {  //i+1, i+2, etc
    //     daysList+=" is today."
    // } else if(i==thisDay+2){
    //     daysList+=" is our next class.";
    // }
}

document.write(daysList);


//Query Selector
document.querySelector('h2').innerHTML="Welcome back from break.";
document.querySelector('h3').innerHTML="Welcome from fall.";


//Class Name
document.getElementsByClassName('odd')[1].style.color ='green';

//Tag Name (targeting unordered list)
var listNodes = document.getElementsByTagName('ul');
    // listNodes.item(0);
listNodes[0].style.border="2px solid red";

//Query Selector to select specific element to make node list
querySelectorAll('p')[4].style.backgroundColor='crimson';


//change attribute
var alterMen=document.getElementsByClassName('alternative');
alterMen[0].setAttribute('class', 'country');

//add item to list
function addItem(){
    //creates new li item with text
    var newItem = prompt("Enter new item: ");
    var newLIItem = document.createElement("li");
    var newLIText = document.createTextNode(newItem);
    newLIItem.appendChild(newLIText);

    //targets the list to add the new item to
    var list = document.getElementsByTagName('ul');
    var myList = list[list.length-1];
    myList.appendChild(newLIItem);
}

//delete item fom list
function deleteItem(){
    //targets the list to delete item from
    var list = document.getElementsByTagName('ul');
    var myList = list[list.length-1];

    //target item to delete
    var lastItem = myList.lastElementChild;
    myList.removeChild(lastItem);
}