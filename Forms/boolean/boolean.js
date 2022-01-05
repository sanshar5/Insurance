/*
function myfunction(){
    let check = document.getElementById('demo').innerHTML = age;
    let age = document.getElementById('age').value;
    
    if(age >= 18){
        return('You are Eligible')
    }
    else{
        return('You are not Eligible')
    }
}
*/

function myfunction(){

const age = document.getElementById('age').value; 
let vote;

if (age >= 18) {
  vote = "You are Eligible";
} else {
  vote = "You are Not Eligible";
}

document.getElementById("demo").innerHTML = vote;
}
