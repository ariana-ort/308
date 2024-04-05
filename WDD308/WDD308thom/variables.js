var currentClass = "WDD308";

var classGrade = 93;

var requiredClass = true;

document.write(currentClass);
document.write("Hello, World!<br/>");


/*Console only appears to developer*/
console.log(classGrade);
console.log("Got here.");

document.getElementById("myPet").innerHTML = "Hello, World!";

var firstName = "Ariana";
var lastName = "Ortmann";
var street = "123 Main Street";
var city = "Indianapolis";
var state = "Indiana";
var zip = 789;

document.write(firstName + " " + lastName);
var fullName = firstName + " " + lastName;
var fullAddress = street + "<br/>" + city + " " + state + " " + zip + "<br/>";
document.write(fullAddress);

document.getElementById("myAddress").innerHTML = fullName + "<br/>" + fullAddress;

var x = 12;
var y = 5;
var z = "5";
var subNum = x - y;
var remainderNum = 12 % 5; //x%y
var multipleNum = y * z;

y = y += 1; //6
y += 1; //6
y++; //6
y--; //4
y -= 1; //4
y = y -= 1; //4

var newNum = 7;
document.write(newNum + "<br/>");
document.write(newNum++ + "<br/>");
document.write(newNum + "<br/>");
document.write(++newNum + "<br/>");


document.write("<p>" + (x + y) + "</p>");
document.write("<p>" + subNum + "</p>");
document.write("<p>" + remainderNum + "</p>");
document.write("<p>" + multipleNum + "</p>");
document.write("<p>" + (y + z) + "</p>");

var myCar = [2020, "Tesla", "Model 5", "automatic", "white"];

document.write(myCar[1] + "<br/>");
document.write("I am a " + myCar[0] + " " + myCar[4] + " " + myCar[1] + " " + myCar[2] + ".");