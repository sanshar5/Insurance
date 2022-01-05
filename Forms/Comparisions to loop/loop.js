
function myfunction(){
const tame = new Date().getHours();
let greeting;
if (tame < 10) {
  greeting = "Good morning";
} else if (tame < 17) {
  greeting = "Good day";
} else if(tame < 21){
  greeting = "Good evening";
}
else if (tame < 23){
 greeting = "Good Night"
}
document.getElementById("demo").innerHTML= greeting;
}

