//String
var strInput = document.getElementById('string');

function chkString() {
    var strValue = strInput.value;
    var strPat1 = /shoe/i;
    var strPat2 = /^web/i;
    var strPat3 = /drink$/;
    var strPat4 = /[a-zA-Z]{3}/;

    //test pattern
    var result= strPat1.test(strValue);
    document.getElementById('stringAns').innerHTML = result;
}

strInput.addEventListener('blur', chkString);


//Phone Number
var phoneInput = document.getElementById('phone');

function chkPhone(){
    var phoneValue = phoneInput.value;

    var phonePat = /^([\(]?)\d{3}([-\). ]?|\) )\d{3}[-. ]?\d{4}$/;


    //var phonePat = / [0-9]{3} [0-9]{3} [0-9]{4}/;

    var result = phonePat.test(phoneValue);
    document.getElementById('phoneAns').innerHTML = result;
}

phoneInput.addEventListener('blur', chkPhone);


//ZIP Code
var zipInput = document.getElementById('myzip');

function chkZip() {
    var zipValue = zipInput.value;

    var zipPat = /(^\d{5}([- ]?)\d{4}$)|^\d{5}$/;

    var result = zipPat.test(zipValue);
    document.getElementById('zipAns').innerHTML = result;
}

zipInput.addEventListener('blur', chkZip);


//Credit Card Number
var ccInput= document.getElementById('ccard');

function chkCard(){
    var ccValue = ccInput.value;

    var ccPat = /(^\d{4}-\d{4}-\d{4}-\d{4}$)|(^\d{4} \d{4} \d{4} \d{4}$)|(^\d{4}\d{4}\d{4}\d{4}$)/;

    var result = ccPat.test(ccValue);
    document.getElementById('ccAns').innerHTML = result;
}

ccInput.addEventListener('blur', chkCard);