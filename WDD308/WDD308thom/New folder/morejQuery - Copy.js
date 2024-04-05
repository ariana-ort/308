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
});