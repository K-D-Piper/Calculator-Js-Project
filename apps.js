function display(val){
    document.getElementById('calcDisplayID').value += val;
}

function solve(){
    let x = document.getElementById('calcDisplayID').value
    let y = eval(x);
    document.getElementById('calcDisplayID').value = y
    return y
}

function clearScreen(){
    document.getElementById('calcDisplayID').value = ''
}

/*
// Calculatlor display section START

let calcDisplay = document.getElementById("calcDisplayID")
calcDisplay = onclick(buttNums)


//Calculator Numbers section START

let calcOneTestOne= document.getElementsByClassName("buttNums")
let calcOneTestTwo = document.getElementById("butt1")

//Calculator Operators section START
let operators = document.getElementsByClassName("buttOpps")
let submit = document.getElementById("buttEquals")

submit.addEventListener("click" , () => 
{
    switch(true)
    {
        case '+':
            result = calcOneTestOne + calcOneTestOne ;
            console.log(`${calcOneTestOne} + ${calcOneTestOne} = ${result}`);
            break; 
    }
})
*/

//TESTING BELOW
/*
let operator = document.getElementsByClassName("buttOpps")

switch(operator){
    case '+':
        result = calcOneTestOne + calcOneTestOne ;
        console.log(`${calcOneTestOne} + ${calcOneTestOne} = ${result}`);
        break;
    case '-':
        result = calcOneTestTwo - calcOneTestTwo;
        console.log(`${calcOneTestTwo} - ${calcOneTestTwo} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    case 'C':
        result = 0;
        console.log(`${0}`);
        break;
    default: 
        console.log('Invald operator')
        break;
}
*/

/*
//programiz.com calculator example

//program mfor a simple calculator 
let result;

//take the operator iniput 
const operator = prompt('Enter operator (either +,-,*, or /): ');

// take teh operand input 
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
*/

//I don't like the prompt but i do like whats below
/*
switch(operator){
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    default: 
        console.log('Invald operator')
        break;
}

//GEEKS CALCULATOR EXAMPLE 

function dis(val){
    document.getElementById("result").value += val
}

function myFunction(event){
    if (event.key == '0' || event.key == '1')
    document.getElementById("result").value += event.key;
}
*/

/*
//PREVOUS TESTING EXAMPLES 
//TESTING WHOLE UL CLASS
let wholeTest = document.getElementById("buttNums")
let wholeTest2 = document.getElementsByClassName("buttNums")
let wholeTest3 = document.querySelector
//TESTING INPUT BUTTON 
let inputTest = document.getElementById("oneInput")

//TESTING LI INPUT BUTTON

//TESTING LI BUTTON 

//TESTING JS SOLO 



THIS IS WHAT IT LOOKS LIKE IN HTML 
<ul class = "buttNums">
<input type="button" value=" 1 INPUT" onclick=" display.value += '1 INPUT' ">    
<li><input type="button" value=" 1 LI BUTTON INPUT" onclick=" display.value += '1 LI BUTTON INPUT' "></li>
<li><button> 1 LI BUTTON </button></li>
*/