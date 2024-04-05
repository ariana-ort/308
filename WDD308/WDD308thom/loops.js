//FOR LOOP

for(var i=0;i<5;i++) {
    document.getElementById('for').innerHTML+="Number:"+ i + "<br/>";
}

var grades= [77,88,99,78];
var gradeSum=0;
for (var i=0; i<grades.length;i++){
    gradeSum+=grades[i];
}

document.write("Grade total: "+gradeSum+"<br/>");


//WHILE LOOP
var days= 3;

while(days>0) {
    if(days==1){
        document.getElementById('while').innerHTML+="There is only "+ days+ " day until fall break begins. <br/>";
    } else{
    document.getElementById('while').innerHTML+="There are "+ days+ " days until fall break begins. <br/>";
    }
    days--; /*will decrease days by one, as an ending point*/
}

//Do WHILE LOOP
var cheers = 50;
do {
    document.getElementById('doWhile').innerHTML+="Give "+ cheers+ " for fall break.<br/>";
    cheers=cheers-5;
} while(cheers>0);

//problem 1
var months = ["January", "February", "March", "April", "May", "June"];
for(var i=0; i<months.length; i++) {  //stopping point with unknown amount in an array
    document.write(months[i]+"<br/>");
} 

//problem 2
var ddText="<select>";
for(var i=0; i<months.length; i++) { //will create new options
    ddText+='<option value="'+ months[i]+ '">' + months[i]+'</option>';
}

ddText=+"</select>";

document.write(ddText);
/*idk why this problem refuses to compute and only shows me NaN????*/



var myGrades=[67, 89, 54, 88, 92, 78];
var gradeTotal=0;

for (var i=0; i<myGrades.length; i++){
    gradeTotal+=myGrades[i];  //will go through and every time add new value of that array
}

document.write("<br/>Grade Total: "+ gradeTotal+"<br/>");
var avgGrade= gradeTotal/myGrades.length;
document.write("Average Grade: "+avgGrade+"<br/>");


//problem 3
var pizzaSlices=9;
while(pizzaSlices>1){
    document.write("<p>There are "+pizzaSlices+" slices of pizza left.</p>");
    pizzaSlices--;
}

//problem 4
var students=15;
do {
    document.write("<p>Number Count: "+students+"</p>");
    students++;
}while(students<20);


//problem 5
var mySlice=10;
while(mySlice>0){
    document.write("<p>Another slice down the hatch!  Only "+ mySlice + " slices are left.</p>");
    // if(tickets==5){
    //     document.write("<p>Only half of the seats remain!</p>");
    // } else 
    if(mySlice==1){
        document.write("<p>Only one slice left!</p>");
        break;
    }
    mySlice--;
}