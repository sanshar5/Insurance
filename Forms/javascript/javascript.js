
let difference = 45 - 15;
console.log(difference)

let divide = 66 / 11;
console.log(divide)

let increment = 99;
increment++;
console.log(increment)

let decimal = 0.9 * 0.1;
console.log(decimal)


let c = 19;
let d = 11;
let e = 15;

c += e;
d = 17 + c;
console.log(c)

var mystring = "FirstLine\n\tSecondLine\nThirdLine\n\t FourthLine";
console.log(mystring)

let me = "Bishwas Sharma";
let mystr = "Hello my name is " + me + " and I live in Pokhara.";
firstLetterofFirstName = me [0];
console.log(firstLetterofFirstName)
console.log(mystr)

let adj = "good boy.";
let my = "Sanshar Sharma is a ";
my += adj;
let length = my.length;
let lastname = my[my.length-3]
console.log(lastname)
console.log(length)
console.log(my)



var myword = "Sello Sanshar";
myword = "Hello Sanshar";
console.log(myword)

let section = ["Bishnu","Sanshar","Parbati"];
section [2] = "Brinda";
console.log(section)

let myarrey = [["Sanshar","Bishnu","Brinda"],["Bishwas","Mom","Sister"],[1,2,3]];
let mydata = myarrey[1][1];
console.log(mydata);


let ourarray = ["Aashish","Sanshar","Bishnu","Brinda"];
ourarray.push("Bishwas","Mamata","Parbati");
let removedFromourarray = ourarray.pop();
let shiftFromOurarray = ourarray.shift();
let unshiftFromourarray = ourarray.unshift("Tulsi Ram Sharma")
console.log(ourarray);



function firstcode(){
    console.log("Hello World");
}
firstcode();

function secondcode(){
    console.log("Hi World");
}
secondcode();

function addition(a,b){
    console.log(a + b);
}
addition(9,11);

function multiply(a,b){
    console.log(a * b);
}
multiply(15, 25);

function localscope() {
    var myvar = 5;
    console.log(myvar);
}
localscope();
/*
console.log(myvar); //doesn't work outside the function
*/
let minename = "Sanshar Sharma"
function itsme() {
   // return my name;
   let myname = "Ravanaasura"
    return myname;
}
console.log(itsme());
console.log(minename)

function minus(num) {
    return num - 9;
}
console.log(minus(20));

function times(num){
    return num * 15;
}
console.log(times(5));


let sum = 9;
function add(){
    sum = sum + 6;
    return sum;
}
console.log(add());


var number = 15;
function change(){
    return (number + 5) / 4;
}
console.log(change());


function nextinline(arr, item){
    arr.push(item)
    return arr.shift();
}
var testarr = [1,2,3,4,5]

console.log("Before:" + JSON.stringify(testarr));
console.log(nextinline(testarr, 6));
console.log("After:" + JSON.stringify(testarr));




function click(){
   const id = document.getElementById('age').value
   if (id === '18'){
       return "yes, you are eligible";
   }
   else {
       return "No, you aren't";
   }
}
console.log(click())
