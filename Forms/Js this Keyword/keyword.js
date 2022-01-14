function myfunction()
{
    let person = {
         firstname: document.getElementById("fname").innerHTML,
         lastname:document.getElementById("lname").innerHTML,
         roll:document.getElementById("rno").innerHTML,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
    }

 document.getElementById("demo").innerHTML = person.fullName();

}
/*
window.onload = function(){
    window.close();
}
*/