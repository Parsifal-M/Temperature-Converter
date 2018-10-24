//Kevlin will not change value.
const kelvin = 200;
//In this line we convert Kelvin to Celsius.
const celsius = kelvin - 273;
//Here we calculate Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
//Here we calculate Newton.
let newton = celsius * (33/100);
//Here we round the number of Fahrenheit & Newton.
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton)
console.log("The temperature is " + fahrenheit + " " + "degrees in Fahrenheit, " + newton + " " + "degrees in Newton and " + celsius + " " + "degrees in Celsius.")
