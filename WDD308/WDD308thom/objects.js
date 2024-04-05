var hotel = {
    name: "Mariott",
    rooms: 100,
    booked: 87,
    pool: true,
    roomType: ["single", "double", "suite"],
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}

hotel.booked = 56;
hotel.gym = true;
hotel.pets = true;


document.write(hotel.name);
document.write(hotel.roomType[1]);
document.write("<br/>" + hotel.checkAvailability());
document.write("Allow pets:" + hotel.pets);



var ChicagoHotel = {
    name: "Mariott",
    rooms: 100,
    booked: 87,
    pool: true,
    roomType: ["single", "double", "suite"],
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}

//Create Multiple Objects from one object

function Vehicle(year, make, model, manual, mpg, fuelEff) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.manual = manual;
    this.mpg = mpg;
    this.fuelEff = function() {
        if (this.mpg > 35) {
            return true;
        } else {
            return false;
        }
    }
}

var charger = new Vehicle(2021, "Dodge", "Charger", false, 15);

document.write("<br/>Is the Charger efficient? " + charger.fuelEff());

var odyssey = new Vehicle(2015, "Honda", "Odyssey", false, 29);

document.write("<p>I have a " + odyssey.year + " " + odyssey.make + " " + odyssey.model + ".</p>");