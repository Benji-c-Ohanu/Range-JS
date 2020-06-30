
var input1= prompt("Enter the First Number");
var bottomNumber = parseInt(input1);
var input2= prompt("Enter the Second Number");
var topNumber = parseInt(input2);
var randomNumber= Math.floor (Math.random () * (topNumber-bottomNumber + 1)) + bottomNumber;
var message ="<p>"+ randomNumber +" is a number between  " + bottomNumber + "  and  "+ topNumber + " <p> ";
document.write(message);