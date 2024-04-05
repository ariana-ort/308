var pageInfo = document.getElementById('pageInfo');
pageInfo.innerHTML = "Height: " + window.innerHeight + "<br/>Width: " + window.innerWidth;
pageInfo.innerHTML += "<br/>Screen Height: " + window.screen.height + "<br/>Screen Width: " + window.screen.width;
pageInfo.innerHTML += "<br/>URL: " + window.location + "<br/>URL: " + window.location.href;
console.log(typeof window.location);
console.log(typeof window.location.href);

function BU() {
    window.open("http://www.butler.edu");
}

function printPage() {
    print();
}

function question() {
    var myColor = prompt("What is your favorite color?");
    document.getElementById("color").innerHTML = myColor + " is a great color!";
}

var docInfo = document.getElementById('docInfo');
docInfo.innerHTML = "Doc URL: " + document.URL + "<br/>";
docInfo.innerHTML += "Doc Title: " + document.title + "<br/>";
docInfo.innerHTML += "Doc Last Modified: " + document.lastModified + "<br/>";
console.log(typeof document.URL);

function getGreeting() {
    var message = document.getElementById('greeting').value;
    var messageText = "Your message is " + message.length + "characters long";
    var messageHalf = message.length / 2;
    messageText += "<br/>The middle character is " + message.charAt(messageHalf);


    document.getElementById('messageInfo').innerHTML = messageText;
}

var classList = document.getElementById('classes').innerHTML;
classList = classList.toUpperCase(); //set it equal to itself but make it uppercase
console.log(classList);
var classArray = classList.split(",")
document.getElementById('class').innerHTML = classArray[2];