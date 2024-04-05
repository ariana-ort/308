//HTML Event Handler-------------------------------
function oldSchool(){
    document.getElementById('htmlEH').innerHTML = "This is bad practice.  Don't use this one";
}



//Traditional DOM-------------------------------
var tradBtn = document.getElementsByTagName('input')[1];

function tradFunction(){
    document.getElementById('traditional').innerHTML = "You can only attach one function to an event.";
}

tradBtn.onclick = tradFunction;



//DOM Level 2-----------------------------------
var dom2Btn = document.getElementsByTagName('input')[2];

function level2Text(){
    document.getElementById('level2').innerHTML = "You can call more than one function with this one.";
}

function alertMe(){
    alert("This is the second function.");
}

/*Calling one function
dom2Btn.addEventListener("click", level2Text, false);
*/

/*Calling two fucntions.  empty function , then inside curly brackets all the functions to run*/
dom2Btn.addEventListener("click", function(){
    level2Text();
    alertMe();
}, false);



//UI Events------------------------------------------
    //target element, then event, then functionality
var pageText = document.getElementById('pageURL');
var lastUPdate = document.getElementById('myLastUpdate');

function displayInfo(){
    pageText.innerHTML = "URL: " + (window.location);
    lastUPdate.innerHTML = "Last Update: " + (document.lastModified);
}

window.addEventListener('load', displayInfo, false);



//KeyPress
var inputText = document.getElementsByTagName('input')[3];

var myKeyPress=0;
function countLetters(){
    myKeyPress++;
    document.getElementById('pressNumber').innerHTML = "Keypress Count: " + myKeyPress;
}

inputText.addEventListener('keypress', countLetters, false);


//DoubleCLick
var dangerText = document.getElementById('danger');

function changeText(){
    dangerText.innerHTML = "You double clicked.";
}

dangerText.addEventListener('dblclick', changeText, false);




//Form Events Dropdown

var dropD = document.getElementById('js');
var ddText = document.getElementById('selectText');
var selectedText;

function ddChoice() {
    var userChoice = dropD.options[dropD.selectedIndex].value;

    switch (userChoice){
        case 'javascript':
            selectedText = "Javascript is the base for all of these.";
            break;
        case 'jQuery':
            selectedText= "You will learn  jQuery this semester.";
            break;
        case 'Angular':
            selectedText = "You will become familiar with Angular in WDD422.";
            break;
        case 'React':
            selectedText = "React is very popular.";
            break;
        default:
            selectedText = "What did you choose?";
            break
    }

    ddText.innerHTML = selectedText;
}

dropD.addEventListener("change", ddChoice, false);