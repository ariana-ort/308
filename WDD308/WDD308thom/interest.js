function calcNum(){
    var num1= parseFloat(document.getElementById('principle').value);
    var num2= parseFloat(document.getElementById('intRate').value);
    var num3= parseFloat(document.getElementById('time').value);

    console.log("hi");

    var num5=(num1*(1+(num2/100)*num3)).toFixed(2);
    var num4=(num5-num1).toFixed(2);

    var message= "With a beginning principal of $" + num1 +" and with a growth rate of "+ num2+"% for "+num3+" years, your total interest will be $"+ num4+ " with a grand total of $"+ num5 +".";

    document.getElementById("resultpgh").innerHTML= message;
}