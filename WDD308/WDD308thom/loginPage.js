//check if password matches
//if it matches test it against the pattern
//if pattern matches then allow register
//if user and pass match then allow a login

//Step One
var regBtn = document.getElementById('submit');

function regUser (){
    var username = document.getElementById('user').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    var loginTxt = document.getElementById('added');

    var passPtrn = /^\w{8,10}$/;
    console.log('hi');

    if(pass1==pass2) {
        if(passPtrn.test(pass1)) {
            loginTxt.innerHTML = "Thank you, " + username + " for registering.";
            //Array below is to test against login information
            var userPass = pass1;
            var userInfo = [username, userPass];
            return userInfo;
        } else {
            loginTxt.innerHTML = "Your password must be between 8-10 characters.";
        }
    } else {
        loginTxt.innerHTML = "Your passwords do not match.  Please try again.";
    }
}

regBtn.addEventListener("click", regUser, false);



//Login Information
var loginBtn = document.getElementById('login');

function loginUser(){
    var lUser = document.getElementById('loginUser').value;
    var lPass = document.getElementById('loginPass').value;

    //Run regUser function to get userInfo
    var userInfo=regUser();

    //Test the username
    if(lUser==userInfo[0] && lPass==userInfo[1]){
        document.getElementById('loginText').innerHTML = "Congrats you're logged in!"
    } else {
        document.getElementById('loginText').innerHTML = "Sorry - the entered information does not match what is on file.  Please try again.";
    }
}

loginBtn.addEventListener('click', loginUser, false);