function myfunction(){
    let text = "";
    for (let i = 0; i < 25; i++) {
      if (i === 20) { break; }
      text += "The number is " + i + "<br>";
    }
    
    document.getElementById("demo").innerHTML = text;
}

function myfunction1(){
    const para = ["Sanshar ", " Sharma ", " is a ", " Good "," Person "," and he is "," Handsome. "];
    let sentence = "";
    
    list: {
      sentence += para[0]; 
      sentence += para[1]; 
      sentence += para[2]; 
      sentence += para[3];
      sentence += para[4];
      break list;
      sentence += para[5];
      sentence += para[6];
      
       
    }
    
    document.getElementById("demo1").innerHTML = sentence;
}

  document.getElementById("sting").innerHTML = "Name is" + typeof "Sanshar";

  document.getElementById("number").innerHTML = typeof 3.14 ;

  document.getElementById("number1").innerHTML = typeof NaN ;

  document.getElementById("boolean").innerHTML = typeof false;

  document.getElementById("object").innerHTML = typeof [1,2,3,4];

  document.getElementById("object1").innerHTML = typeof {name:'Bishnu', age:40};

  document.getElementById("object2").innerHTML = typeof new Date() ;
  
  document.getElementById("function").innerHTML = typeof function () {};

  document.getElementById("undefine").innerHTML = typeof myCar;

  document.getElementById("object3").innerHTML = typeof null;
 /*

  document.getElementById("operator").innerHTML = 
  typeof "john" + "<br>" +
  typeof 3.14 + "<br>" +
  typeof NaN + "<br>" +
  typeof false + "<br>" +
  typeof [1,2,3,4] + "<br>" +
  typeof {name:'john', age:34} + "<br>" +
  typeof new Date() + "<br>" +
  typeof function () {} + "<br>" +
  typeof myCar + "<br>" +
  typeof null;
  */