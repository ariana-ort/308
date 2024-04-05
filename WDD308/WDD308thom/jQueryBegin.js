$(document).ready(function(){
    $("ul:not('#drinkList') li:nth-child(2)").addClass("hot");
    //attr("class", "hot");

    //form
    

    //function submitForm(){};
    submitForm= () => {
        var myName = $('input[name="name"]').val();
        var myComment = $('textarea').val();
        alert("hello " + myName + "! thanks for your follow comment: "+ myComment);
    }
    $('#formBtn').on("click", submitForm);



})