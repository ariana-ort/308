var passForm = document.forms[0];  //targets form
var passBtn = passForm.getElementsByTagName('img')[0];  //creates variable to hold image as button


function showPassword(){  
    //function to show and hide password
    var imgSrc = passBtn.getAttribute('src');  //declares button as img varibale
    console.log(imgSrc);
    var hidePassImg = imgSrc.indexOf('hide');  //sets # for hidePassImg
    console.log(hidePassImg);
    hidePassImg =hidePassImg<0;  //makes bool
    console.log(hidePassImg);

    //if statement using bools to determine what function does
    if(hidePassImg==false){  
        document.getElementsByTagName('img')[0].setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png");
        document.getElementById('pass').setAttribute('type', 'text');
     } else {
        document.getElementsByTagName('img')[0].setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png");
        document.getElementById('pass').setAttribute('type', 'password');
    }
}

passBtn.addEventListener('click', showPassword, false);  //uses image variable as button