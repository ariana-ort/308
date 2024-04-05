var bankBal = 45.67;
var toy = 45.99;
var buyToy = bankBal>toy; 
console.log(buyToy); //checks if t/f

if(buyToy) {
    document.getElementById('bank').innerHTML="Awesome, let's buy it.";
} else {
    document.getElementById('bank').innerHTML = "Maybe don't spend more than you have.";
}


//Birthday Month
var today = new Date();
var currentMonth = today.getMonth()+1; //otherwise January starts at 0

// if(currentMonth==10) {
//     document.getElementById('birthday').innerHTML = "It's my birthday month!";
// } else {
//     document.getElementById('birthday').innerHTML = "It's NOT my birthday month."
// }

if(currentMonth!= 10) {
    document.getElementById('birthday').innerHTML = "It's NOT my birthday month!";
}


//Right to Vote
function checkAge() {
    var yourAge = document.getElementById('age').value;

    if(yourAge>=18) {
        document.getElementById('voteAge').innerHTML = "You can vote!";
    } else if (yourAge==17) {
        document.getElementById('voteAge').innerHTML = "You can vote next year.";
    } else {
        document.getElementById('voteAge').innerHTML = "Sorry - you are too young to vote.";
    }
}


//Today's Date
var dayTime = today.getHours();
var myTime = document.getElementById('myTime');
console.log(dayTime);

if(dayTime<12) {
    myTime.innerHTML = "It's in the AM.";
}else {
    myTime.innerHTML = "It's in the PM.";
}

if(dayTime<11) {
    myTime.innerHTML+="<br/>Good morning!";
}else if(dayTime>=11 && dayTime<=16) {
    myTime.innerHTML+="<br/>Good afternoon!";
}else if(dayTime>16 && dayTime<=20) {
    myTime.innerHTML+="<br/>Good evening!";
} else {
    myTime.innerHTML+="<br/>Good night!";
}


//Pass Class
var midterm = 78;
var final = 87;
var totalPts= 350;
var classAvg = 85;
var myAvg = (47+63+midterm+final)/totalPts;

var msg = document.getElementById('msg');

msg.innerHTML = "Midterm Grade: " + midterm;
var mtPass = (midterm/100)*100 >50;
msg.innerHTML += "<br/>Pass Midterm: " + mtPass;
var mtAvg= (midterm/110)*100;
var finalAvg = (87/110)*100;

if (mtAvg>50 && finalAvg>72){
    msg.innerHTML+="<br/>You passed the class.";
} else {
    msg.innerHTML += "<br/>You did not pass this class.";
}

if ((mtAvg>50 && finalAvg>72) || myAvg>80) {
    msg.innerHTML+="<br/>Congratulations! The class is complete.";
}

console.log("hello");
//Warm Up Problem
document.getElementById('dayOfWeek').innerHTML=today;

var thisDay=today.getDay(); //add +1,2,3,4 etc to change day
console.log(thisDay);
var dayText;

if(thisDay<3){
    dayText="It's the beginning of the week.";
}else if(thisDay==3){
    dayText="It's hump day!";
} else if (thisDay>=4 && thisDay<=5){
    dayText="The weekend is almost here!";
}else {
    dayText="It is the weekend.";
}

document.getElementById('dayOfWeek').innerHTML+="<br/>" + dayText;


//Dice Game
// function rollDie(){
//     var dieImage;

//     //creating rand num
//     var die = Math.floor(Math.random()*6)+1;


//     switch(die) {
//         case 1:
//             dieImage = "die_face_1.png";
//             break;
//         case 2:
//             dieImage="die_face_2.png";
//             break;
//         case 3:
//             dieImage = "die_face_3.png";
//             break;
//         case 4:
//             dieImage="die_face_4.png";
//             break;
//         case 5:
//             dieImage = "die_face_5.png";
//             break;
//         case 6:
//             dieImage="die_face_6.png";
//             break;
//         default:
//             alert("Something went wrong");
//             break;
//     }

//     document.getElementById('dice_1').innerHTML='<img scr="images/'+dieImage+'"/>';


//     var die = Math.floor(Math.random()*6)+1;


//     switch(die) {
//         case 1:
//             dieImage = "die_face_1.png";
//             break;
//         case 2:
//             dieImage="die_face_2.png";
//             break;
//         case 3:
//             dieImage = "die_face_3.png";
//             break;
//         case 4:
//             dieImage="die_face_4.png";
//             break;
//         case 5:
//             dieImage = "die_face_5.png";
//             break;
//         case 6:
//             dieImage="die_face_6.png";
//             break;
//         default:
//             alert("Something went wrong");
//             break;
//     }
//     document.getElementById('dice_2').innerHTML='<img scr="images/'+dieImage+'"/>';
// }




  //Seasons of the Year
  var thisMonth=today.getMonth() +2;
  console.log("month: "+thisMonth);
  var season;

  switch(thisMonth){
        case 1:
        case 2:
        case 3:
            season = "winter";
            break;
        case 4:
        case 5:
        case 6:
            season = "spring";
            break;
        case 7:
        case 8:
        case 9:
            season = "summer";
            break;
        case 10:
        case 11:
        case 12:
            season = "autumn";
            break;
  }
  document.getElementById('season').innerHTML="It is "+ season +".";