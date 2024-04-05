var answers = document.getElementById("answers");
var grades = [78, 86, 92, 77];

var myAnswers;



myAnswers = "<ol>";

myAnswers += "<li>" + grades + "</li>";
myAnswers += "<li>" + grades[1] + "</li>";
grades[1] = 83;
myAnswers += "<li>" + grades + "</li>";
myAnswers += "<li>" + grades.length + "</li>";
grades[0]++; //grades[0]+=1;  grades[0]=grades+1;
myAnswers += "<li>" + grades + "</li>";
myAnswers += "<li>" + grades[3] + "</li>";
var totalGrade = grades[0] + grades[1] + grades[2] + grades[3];
var avgGrade = totalGrade / grades.length;
myAnswers += "<li>Your grade average is " + avgGrade + ".</li>";


var pets = ["cat", "dog", "bird", "hamster", "lizard", "frog"];
var extraAnswers = document.getElementById('extraAnswers');

var petAnswers;
petAnswers += "<p>" + pets + "</p>";
//add a value at the end of the array
pets.push("turtle");
petAnswers += "<p>" + pets + "</p>";

//delete a value
pets.pop();
petAnswers += "<p>" + pets + "</p>";

//add value at the front of an array
pets.unshift("fish");
petAnswers += "<p>" + pets + "</p>";

//delete a value at the front of the array
pets.shift();
petAnswers += "<p>" + pets + "</p>";

pets[3] = "snake";

//add a value in the middle of an array
pets.splice(3, 0, "snake");
petAnswers += "<p>" + pets + "</p>";

//delete value in array
pets.splice(3, 2);
petAnswers += "<p>" + pets + "</p>";


myAnswers += "</ol>";


answers.innerHTML = myAnswers;
extraAnswers.innerHTML += petAnswers;