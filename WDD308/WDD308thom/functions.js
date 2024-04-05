function changeText() {
    document.getElementById("changeTxt").innerHTML = "This text has been changed.";
}

//CALLING FUNCTION
changeText();

//Another Simple Function & Yet Another
function checkin() {
    document.write("This function does not take parameters.");
    console.log("Hello, world!");
}

checkin();

//Simple Parameter
function printName(firstname) {
    console.log(firstname);
}

printName("Ariana");
printName("Elizabeth");
printName("Carly");
printName("Jane");

//Using Parameters
var height = 10;
var width = 12;

function calcPerm(pheight, pwidth) {
    var recPerm = (2 * pheight) + (2 * pwidth);
    return recPerm;
}

document.getElementById("panswer").innerHTML = calcPerm(height, width) + "ft.";

//another option
var recPermAnswer1 = calcPerm(height, width);
document.getElementById("panswer").innerHTML += "<br/>" + recPermAnswer1 + " ft.";

//square foot calculator
function calcArea() {
    var he = document.getElementById("height").value;
    var wi = document.getElementById("width").value;
    var area = he * wi;
    document.getElementById('answer').innerHTML = area + "sq. ft.";

}

//testing function
function testing() {
    return "dog";
    return "cat";
}

console.log(testing());

//Multiple Value Functions: SIngle Properties
function newRectangle(height, width) {
    var recArea = height * width;
    var recPerimeter = (2 * height) + (2 * width);
    var recInfo = [recArea, recPerimeter];
    return recInfo;
}

document.getElementById("multiAnswer").innerHTML = "Area: " + newRectangle(3, 8)[0] + " square feet <br/>Perimeter: " + newRectangle(3, 8)[1] + " feet";

//Button Functions
function stranger() {
    alert("Well, hello there stranger.");
}

//Button Function With Parameter
function wizard(name, occupation) {
    document.getElementById("future").innerHTML = "Welcome " + name + ", the " + occupation + "!";
}

//Another Button Function
function addItem() {
    var newItem = prompt("Add item: ");
    console.log(newItem);
    document.getElementById('future').innerHTML=newItem;
}