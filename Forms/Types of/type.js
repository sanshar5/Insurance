
function myfunction() {
  const message = document.getElementById("demo");
  message.innerHTML = "";
  let x = document.getElementById("age").value;
  try {
    if(x == "") throw "Please Enter your age.";
    if(isNaN(x)) throw "Input should be a number.";
      x = Number(x);
    if(x < 18) throw "You are Under-age(Child).";
    if(x > 58) throw "You are Old.";
    if(x <= 57) throw "You are Young.";
  }
  catch(err) {
    message.innerHTML =  err;
  }
}


