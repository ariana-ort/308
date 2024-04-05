//Problem 1
function probPrompt(){
    var spaceship=window.prompt("Please enter your age:");
    var setAge=26;

    console.log("hello");

    if (spaceship>setAge){
        alert("Spaceship Navigation Granted.");
    } else if(spaceship=<setAge) {
        alert("Spaceship Navigation Denied.");
    }
}

//Problem 2
var probNum=[87, 56, 92, 77];
var totalNum= probNum[0] + probNum[1]+ probNum[2]+ probNum[3];
var avgNum=totalNum/4;
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
            alert("This ain't it, chief");
            break;
        
        
    }

    document.getElementById('rollCommand').innerHTML=numCase;
  }

//Problem 4
function trueFalse(){
    var newItem = jsSubmit;;
    // var myAnswer= "true";
    // var myAnswer=newItem;
    // console.log(myAnswer);

    if (newItem="true" || newItem="True" || newItem="yes" || newItem="Yes"){
        document.getElementById('prob4').innerHTML="Awesome!";
    } if else(newItem="false" || newItem="False" ||newItem="no" ||newItem="No") {
        document.getElementById('prob4').innerHTML="I am sorry- hope it gets better for you.";
    }
}