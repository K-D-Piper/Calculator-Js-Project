//FINAL (HOPEFULLY) attempt 
    //Sections of calculator 
        //Display 
        //Numbers
        //Operators 
        //Solutions 

//DISPLAY START
    //debugger
    //assigning values to variables 
    let firstNum = ''
    let secondNum = ''
    let operator = ''
    //above is empty strings to allow for something to added 
    //below is values linked to HTML
    let calcDisplay = document.getElementById('calcDisplayID')//grabs my displayID from HTML
    let numbers = document.getElementsByClassName("number") //grabs all my button numbers from HTML
    let operators = document.getElementsByClassName("operator") //grabs all my operators from HTML

    //adding click arrow loop to both connect to above function but also press to do something

    //NUMBERS BELOW
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        console.log(parseInt(element.getAttribute('value')))
        element.addEventListener('click' , () => {
            calcDisplay.value += element.getAttribute('value')
        }//end of arrow function 
        ) //end of EventListener
        } //end of for loop1
console.log(numbers)
//ABOVE NUMBERS DO, IN FACT, DISPLAY ON CONSOLE

//Operators below 
        for (let i = 0; i <operators.length; i++){
            let element = operators[i];
            element.addEventListener('click', () => {
                if (element.getAttribute('value') == '='){
                    secondNum = calcDisplay.inner
                }
            })
        }










/*
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


//TESTING BELOW

//THIS IS THE DISPLAY ELEMENT
//use for this is: To display the numbers
let display = document.getElementById("calcDisplayID");


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

//AAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

//Calculator Display Section START


//Calculator Displaly END

//Calculator Numbers Section START
//let number = document.getElementsByClassName("number")
//Mikes example 
/*
function () {
    let firstNum = ''
    let secondNum = ''
    let operator = ''
    let number = document.getElementsByClassName("number")
    
    for (let i = 0; i <number.length; i++){
        const element = number[i];
        element.addEventListener('click', function(event)){
            display.innerText += element.getAttribute('value');
        }
    }
}
//Calculator Numbers Section END

//Calculator Operators section START
let operators = document.getElementsByClassName("operator")

let submit = document.getElementById("buttEquals")

submit.addEventListener("click" , () => 
{
    switch(operators){
        case '+':
            result = number + number
            console.log(`${number} + ${number} = ${result}`);
            break;
        case '-':
            result = number - number
            console.log(`${number} - ${number} = ${result}`);
            break;
        case '*':
            result =  number*number ;
            console.log(`${number} * ${number} = ${result}`);
            break;
        case '/':
            result = number / number ;
            console.log(`${number} / ${number} = ${result}`);
            break;
        default: 
            console.log('Invald operator')
            break;
    }
})
*/