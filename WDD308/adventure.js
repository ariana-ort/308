function startGame(){
    var name = prompt("Welcome to your choose your own adventure game.  Please start by entering your name: ");
    alert("Welcome "+ name+"!  We are going on a campus adventure.  Are you ready? Click the button to continue.");
    var tool=prompt("To begin our adventure, you must select a tool.  Please pick your tool of choice: FLASHLIGHT SHOVEL or LADDER");
    var room= prompt("You walk through Fairbanks and hear a loud menacing growl coming from a room downstairs.  Do you ENTER or LEAVE?");
    console.log(room);


    function leaveRoom(){
        alert("You choose to leave the room.  Chicken.");
    }
    function enterRoom(){
        var useTool=prompt("You choose to enter the room and it is dark and empty but you can still hear the growl.  Do you want to use your tool?  YES or NO");

        if(useTool=="YES"){
            roomTool();
        } else{
            alert("No tool? The monster attacks and you die.  Whoops!");
        }
    }

    function roomTool(){
        if(tool=="FLASHLIGHT"){
            alert("You use your flashlight and see it's just the sound of your classmate's stomach.  He's hungry.");
        } else if(tool=="SHOVEL"){
            alert("You feel something attack you and you use your shovel to whack the monster.  Congratulations!");
        } else if(tool=="LADDER"){
            alert("The monster approaches and you climb to the top of the monster and get a free piggyback ride.  You two become best buddies.");
        }
    }

    

    if(room=="LEAVE"){
        leaveRoom();
    } else{
        enterRoom();
    }
}