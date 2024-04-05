$(document).ready(function(){
//Makes sure HTML file is loaded before running javascript/jQuery

    var navItem = $('li').html();
    console.log(navItem);
    //$('li').html("The Beatles");

    //Print out UL items
    console.log($('ul').html());  //selects html element and things inside
    console.log($('ul').text());  //only gets text, not targeting html
    
    //ADDING CONTENT
    //$('ul').before("<h1>Web Content</h1>");
    $('ul:not("#myList")').before("<h1>Web Content</h1>");
    $('#myList').after("<h2>Happy Halloween</h2>");

    //PREPEND AND APPEND
    $('ul:not("#myList")li:last-child').append(" is awesome");
    $('#myList li:first-child').prepend("My favorite are the peanut or pretzel ");
    //ADDING AN ELEMENT
    $('#myList li:nth-child(3)').before("<li>Baby Ruth</li>");

    //CHANGE h1
   console.log($('h1').html());
   $('h1').html("<h4>I love jQuery!</>");
   console.log($('h1').html());
   $('h1').replaceWith("<h4>I love jQuery!</h4>");
   console.log($('h1').html());
   //METHOD 2
   $('h4+h2').remove();

   $('h4').attr("class", "myOtherText");

   $('h2').addClass('myText');

   $('ul:not("#myList") li').addClass('favorite');

   //making all hot pink but the last (REMOVING A CLASS W SPECIFIC TARGET)
   $('ul:not("#myList") li:last-child').removeClass('favorite');

    //creating element
   $('h4').before("<h1>jQuery Examples</h1>");
    //adding css
    $('h1').css("background-color", "orange");
    $('h1').css({
        "background-color": "seagreen",
        "padding": "10px",
        "border": "3px solid orange",
    })


    //functions 2.0
    /*old way: function alertMe(){};
    new way:*/
    alertMe=() => {
        alert("jQuery is cool");
    }

    //single event listener    
    //$('#alertMe').on("click", alertMe);

    //Event call with multiple functions
    $('#alertMe').on("click", function(){
        alertMe();
        alert("more alerts");
    })

    /*hovering kind of
    $('#myList li').on("mouseenter", function (){
        $(this).css("background-color", "goldenrod");
    })
    $('#myList li').on("mouseleave", function (){
        $(this).css("background-color", "crimson");
    })
    */
    //multiple events on the same items
    $('#myList li').on({
        mouseenter: function (){
            $(this).css("background-color", "goldenrod")
        },
        mouseleave: function () {
            $(this).css("background-color", "crimson");
        },
        click: function () {
            $(this).css("color", "white");
            $(this).css("font-weight", "bold");
        }
    })

    //keypress event
    var kPress = 0;
    $('input[type="text"]').on("keydown", function(){
        kPress++;
        $('span').text(kPress);
    })

    //dropdown selection
    $('select').on('change', function(){
        var myChoice = $(this).find(':selected').val();
        $('#selection').html("my favorite is "+ myChoice);
    })

});