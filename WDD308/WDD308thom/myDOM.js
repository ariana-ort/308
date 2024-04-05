var myList=document.getElementById('cakelist');

document.getElementsByTagName('li')[0].style.color ='crimson';
document.getElementsByClassName('cakeflavor')[1].style.color ='teal';
document.getElementsByClassName('cakeflavor')[2].style.backgroundColor ='pink';
document.getElementsByClassName('cakeflavor')[4].style.backgroundColor ='skyBlue';
document.getElementsByClassName('cakeflavor')[6].style.backgroundColor ='lightGray';
document.getElementsByClassName('cakeflavor')[6].style.color ='royalBlue';


function removeItem(){
    //removing italian wedding cake
    var cakeScraps = document.getElementById('buonasera');
    document.getElementById('cakelist').removeChild(cakeScraps);
}

function addItem(){
    //adding my name
    var batter = document.createElement('li');
    batter.innerHTML= 'Ariana Ortmann';
    myList.appendChild(batter);
}
