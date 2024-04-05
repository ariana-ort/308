var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
//var holidays = ["New Years", "Valentines", "St. Patrick's Day", "Easter", "Mother's Day", "Father's Day", "Fourth of July", "idk, it's August", "Labor Day", "my Birthday hehe", "Thanksgiving", "Christmas"];

var today= new Date();
var date=today.toDateString();
document.write("<p>"+date+"</p>");

for(var i=0; i<months.length; i++) {  
    document.write("<p>"+months[i]);
    if(i ==10){
        document.write(": Current Month");
    }
} 


var ddText="<select>";
for(var i=0; i<months.length; i++) { //will create new options
    var drop = document.createElement('option');
    drop.innerHTML = months[i];
    var myDrop=document.getElementById('mySelect');
    myDrop.appendChild(drop);
    ddText+='<option value="'+ months[i]+ '">' + months[i]+'</option>';
}

ddText=+"</select>";