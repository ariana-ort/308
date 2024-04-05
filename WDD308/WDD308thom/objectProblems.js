var myName = {
    firstName: "Hyewon",
    lastName: "Park",
    age: 20,
    height: 61,
    hair: "brown",
    eye: "brown",
    theName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log("Got here");


document.getElementById("fullName").innerHTML = myName.theName();
myName.eye = "blue";
document.getElementById("newFProp").innerHTML = myName.eye;





function Car(make, model, version, automatic, mpg, cost, discount) {
    this.make = make;
    this.model = model;
    this.version = version;
    this.automatic = automatic;
    this.mpg = mpg;
    this.cost = cost;
    this.discount = function() {
        if (cost >= 10000) {
            return true;
        } else {
            return false;
        }
    }
}
var momscar = new Car("Honda", "Odyssey", 2015, true, 31, 1200);

document.getElementById("car1").innerHTML = (momscar.version + " " + momscar.make + " " + momscar.model + " " + momscar.automatic + " " + momscar.mpg + " " + momscar.cost + " does it have a discount? " + momscar.discount());

var civic = new Car("Honda", "Civic", 2017, true, 30, 6000);

document.getElementById("car2").innerHTML = (civic.make + " " + civic.model + " " + civic.automatic + " " + civic.mpg + " " + civic.cost + " " + civic.discount())


function WDD(number, name, seats, students, remaining) {
    this.number = number;
    this.name = name;
    this.seats = seats;
    this.students = students;
    this.remaining = function() {
        return this.seats - this.students;
    }
}

var WDD108 = new WDD(108, "Multimedia Graphics", 18, 18);
var WDD219 = new WDD(219, "Designing for the Web", 18, 17);
var WDD306 = new WDD(306, "Responsive Design", 18, 18);
var WDD308 = new WDD(308, "Interaction Design", 18, 15);
document.getElementById("courseNames").innerHTML = (WDD108.name + ", " + WDD219.name + ", " + WDD306.name + ", " + WDD308.name);
document.getElementById("308seatsOpen").innerHTML = ("There are " + WDD308.remaining() + " seats open for " + WDD308.name + ".");