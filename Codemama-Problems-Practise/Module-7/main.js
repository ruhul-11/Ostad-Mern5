// Problem-1 : Celsius to Fahrenheit
// Write a program to convert temperature from Celsius to Fahrenheit

/*
const celsius = Number(input);
const fahrenheit = ((celsius * 9) / 5) + 32;

//console.log("The temperature in Fahrenheit is:", fahrenheit.toFixed(2));
//console.log("The temperature in Fahrenheit is: " + fahrenheit.toFixed(2));
console.log(`The temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}`);
*/


const cel = Number(input);
const fahrenheit = celToFahrenheit(cel);
console.log(`The temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}`);


function celToFahrenheit(celsius){
    const fahrenheit = ((celsius * 9) / 5) + 32;
    return fahrenheit;
}



// Problem-2 : Three Number average
// Write a program that finds the average of three numbers entered by the user.

const data = input.split(" ");

let sum = 0;
for(let i=0; i<data.length; i++){
    const item = Number(data[i]);
    sum += item;
}
const avg = sum / 3;
console.log(avg.toFixed(2));
