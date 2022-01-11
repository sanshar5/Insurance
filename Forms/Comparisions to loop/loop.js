function myfunction(){
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 17) {
  greeting = "Good day";
} else if(time < 21){
  greeting = "Good evening";
}
else if (time < 23){
 greeting = "Good Night"
}
document.getElementById("demo").innerHTML= greeting;
}


/*
function myfunction(){
  const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 17) {
  greeting = "Good day";
} else if(time < 20){
  greeting = "Good evening";
}
else if (time < 23){
  greeting = "Good Night"
}
document.getElementById("demo").innerHTML = greeting;
}
*/