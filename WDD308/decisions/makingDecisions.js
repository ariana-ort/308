// //Problem 1
var spaceship= prompt("Please enter your age:"); //window prompt dialogue box
var age=Number(spaceship); //sets input as numerical
console.log("hya");

    if (age>26){
        alert("Spaceship Navigation Granted.");
    } else {
        alert("Spaceship Navigation Denied.");
    }


// //Problem 2
var probNum=[87, 56, 92, 77]; //create array
var totalNum= probNum[0] + probNum[1]+ probNum[2]+ probNum[3]; //create calculation to average array
var avgNum=totalNum/4; //above calc cont
console.log(avgNum);

if(avgNum>75){ 
    document.getElementById('probNum').innerHTML="You are in the top 25% of the class!";
} else if(avgNum<=75 && avgNum>=60){
    document.getElementById('probNum').innerHTML="You passed the class!";
} else if(avgNum<60){
    document.getElementById('probNum').innerHTML="Sorry - you did not pass the class. Better luck next time!";
}

//Problem 3
function rollDie() {
    var numCase;
    var roll = Math.floor(Math.random()*5)+1;

    console.log("hello");
    switch(roll){
        case 1:
            numCase="1: The lowest number you can get.";
            break;
        case 2:
            numCase="2: This is the lowest even number you can get.";
            break;
        case 3:
            numCase="3. Right smack in the middle.";
            break;
        case 4:
            numCase="4: Good number!";
            break;
        case 5:
            numCase="5: Way to roll!";
            break;
        default:
            alert("Something's amiss, check the code");
            break;
        
        }

    document.getElementById('rollCommand').innerHTML=numCase;
  }

//Problem 4

function trueFalse(){ //onclick function called
    var newItem = document.getElementById('jsSubmit').value; //sets input as variable
    newItem ==="true";
    console.log(newItem);

    if(newItem=="true"){ //it didn't like when i added || newItem=="True"
        document.getElementById('prob4').innerHTML="Awesome!";
    } 
    if(newItem =="false" || newItem=="False") { //this one gets capitalized ?
        document.getElementById('prob4').innerHTML="Im sorry to hear that.  I hope it gets better for you.";
    } 
    
}