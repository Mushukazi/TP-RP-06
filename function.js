function firstName(Name){
    console.log(`hello, ${Name}`)
}
firstName("musharaf");

// Aera of rectangle 

function areaRectangle(height, width) {
    function areaRectangle(length, width) {
    
        var areaRectangle = height * width;
        var areaRectangle = length * width;
    
        console.log(areaRectangle)
    }
    areaRectangle(20,20);
}

// Temperature converter Function 
function celsiusTofahrenheit (celsius) {
    
    var  celsiusTofahrenheit = (celsius*9/5)+32; //(0°C × 9/5) + 32 
    console.log(celsius + " Celsius To Fahrenheit Degree : " + celsiusTofahrenheit + "'F")     
}
celsiusTofahrenheit(20)
function fahrenheitTocelsius(fahrenheit) {
    
    var  fahrenheitTocelsius = (fahrenheit-32)*5/9; //(0°F − 32) × 5/9
    console.log(fahrenheit + " Fahrenheit To Celsius Degree :"+ fahrenheitTocelsius + "'C")
    
}
fahrenheitTocelsius(10)

//Increment function 
var count = 0
function counter(){
    count += 1;
    console.log("count :"+ count)
}
//Calculator function
var a = 16;
var b = 10;

//Addition Function
function addition(num1, num2) {
    console.log(`Addition of ${num1} + ${num2} is : ${num1+num2}`)
}
//Substraction Function
function substraction(num1, num2) {
    console.log(`Substraction of ${num1} - ${num2} is : ${num1-num2}`)
}


// Calculator function
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  return a / b;
}

// Call add function
console.log(add(16, 10)); 

// Call subtract function
console.log(subtract(16, 10));

// Call multiply function
console.log(multiply(16, 10)); 

// Call divide function
console.log(divide(16, 10));