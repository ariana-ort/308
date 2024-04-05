document.getElementById("ticketNum").innerHTML += "3";

document.getElementById("ticketCost").innerHTML += "14";

var cost = (3 * 14);
document.getElementById("ttCost").innerHTML += cost;


var student = 0.8
var pizza = ((4 * 8) / 2.5) - student;
var leftovers = (4 * 8) % 2.5;
document.getElementById("profPizza").innerHTML += "Students: " + pizza + "<br/>" + "Rector: " + leftovers;


var adult = 12;
var child = 6;
var drink = 1.5;
// var receipt = ((adult * 2) + (child * 1) + (drink * 3));
document.getElementById("Monty").innerHTML = "<p>" + "$" + ((adult * 2) + (child * 1) + (drink * 3)) + "<br/> Alternatively adding the $2.76 to match the given photo would yield: $37.26." + "</p>";