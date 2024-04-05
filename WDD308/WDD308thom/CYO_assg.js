function startGame(){
    var name = prompt("Welcome to Ariana's choose your own adventure game! To make things more personal, what's your name? ");
    alert("Welcome "+ name+"!  We have started a treacherous journey...well there's no destination so it's more of an adventure.  Night is coming in a few hours and so far we have not come across a place to sleep. "+name+", are you ready to play?  Click the button to continue.");
    console.log('hello');
    var rickety=prompt("Whew, we have been hiking all day!  Now we have arrived at a valley, I think it can only be crossed by this rickey looking bridge.  Should we go ACROSS the bridge, or VENTURE into the steep valley?");

    if(rickety=="ACROSS"){
        var sturdy=prompt("This bridge is sturdier than meets the eye!  Good choice, "+name+"!  Now we are faced with woods.  Should we stay on this potentially tricked out PATH, or go into the WOODS?");
            if(sturdy=="PATH"){
                path();
            }else if(sturdy=='WOODS'){
                woods();
            }
    } else if(rickety=='VENTURE'){
            var valley=prompt("Valley it is!  Good thing too, the wind blew a bit too hand and the bridge snapped.  To get into the valley, do you SHIMMY down the bridge-ladder, or use your AXE to climb down?");
            if(valley=='SHIMMY'){
                shimmy();
            }else if(valley=='AXE'){
                climb();
            }
    }


    function climb(){
        var climbChoice=prompt("Climbing down! You're safe, do you GO down the valley or climb UP the other side and continue your route?");
        if(climbChoice=='GO'){
            alert("You go down the valley and find a group of travelers setting up their own camp and you stay with them!");
        } else if(climbChoice=='UP'){
            alert("You try to climb but the valley wall is too soft and you cant get up.  Sorry, you didn't make it this time.");
        }
    }

    function shimmy(){
        var shimmyChoice=prompt("Shimmy down the ladder!  But oh no!  It cracks under your weight and snaps, causing you to fall.  Do you make a PARACHUTE while falling or make PEACE with your fate?");
        if(shimmyChoice=='PARACHUTE'){
            alert("Your backpack has a sheet stuffed in it's top, you pull it out just in time to fashion a parachute, floating you down to safety.  Congrats!");
        } else if(shimmyChoice=='PEACE'){
            alert("Well, at least falling is fun.");
        }
    }

    function path(){
        var pathChoice=prompt("You go on the path most traveled, but uh oh!  Looks like the wildlife knows this is a populated route...that bear looks hungry.  Do you go BACK, or SCATTER into the woods?");
        if(pathChoice=="BACK"){
            alert("Your tired 'speed'(if anyone would call it that) is no match for the bear!  Sorry man, I cant watch this...");
        } else if(pathChoice=='SCATTER'){
            alert("You enter the woods and the bear doesn't follow you, you're safe...for now...");
        }
    }

    function woods(){
        var woodsChoice=prompt("You have chosen to venture into the creepy dark woods.  Nightfall is quickly approaching.  Do you climb that sturdy looking TREE and try to sleep in the branches, or pray for safety inside that dark CAVE?");
        if(woodsChoice=='TREE'){
            alert("It's not very comfortable, but you're high enough off of the ground that none of the dangerous woodland creatures will hurt you in your sleep.  Congratulations!");
        } else if(woodsChoice=='CAVE'){
            alert("What makes you think a cave is safe?  Upon entering, you realize that this cave is occupied by a bear.  It was nice knowing you!");
        }
    }

    
    
}