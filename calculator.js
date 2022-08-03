var calculatorDiv = document.querySelector('.calculator');
let calculatorScreen= document.createElement('section');
let calculatorBoard= document.createElement('section');
calculatorBoard.className='calculator__board';
calculatorScreen.className='calculator__screen';
calculatorDiv.appendChild(calculatorScreen);
calculatorDiv.appendChild(calculatorBoard);
console.log(calculatorDiv)

//CALCULATOR SCREEN
var textView= document.createElement('span');
textView.className='textView';
calculatorScreen.appendChild(textView);
textView.setAttribute('type', 'text');
textView.setAttribute('placeholder', '0');

//CALCULOTAR BOARD
//Function to create the operators
function createOperators(array, mainDiv, className){
    for (let i = 0; i < array.length; i++) {
        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', array[i]);
        button.className = className;
        button.innerText = array[i];
        mainDiv.appendChild(button);
        }
    }

//creating the HTML part of the numbers and "." and "="
let numbersDiv= document.createElement('div');
numbersDiv.classList.add('numbers');
calculatorBoard.appendChild(numbersDiv);
//Array of first operators
let firstOperators =["0", ".", "=", "1", "2", "3", "4", "5", "6", "7","8", "9"];

createOperators(firstOperators, numbersDiv, 'numbers');


//Creating the column of operators on the right
let rightDiv= document.createElement('div');
rightDiv.classList.add('basic__operators__right');
calculatorBoard.appendChild(rightDiv);

let operatorsRight = ["+", "-", "*", "/"]

createOperators(operatorsRight, rightDiv, 'operators');


//Creating the row of operators on top
let topDiv= document.createElement('div');
topDiv.className='basic__operators__top';
calculatorBoard.appendChild(topDiv);

let operatorsTop = ["(", ")", "%", "AC"];

createOperators(operatorsTop, topDiv, 'operators')


//Organizing the div for the flexbox
let numbersAndBasicOperators = document.createElement('div');
calculatorBoard.appendChild(numbersAndBasicOperators);
numbersAndBasicOperators.appendChild(numbersDiv);
numbersAndBasicOperators.appendChild(rightDiv);
numbersAndBasicOperators.className='numbersAndBasicOp';


//END OF CREATING THE HTML

//BEGINNING 

//Display the numbers and operators on the screen
let buttonsCalculator = document.querySelectorAll("input[type=button]");
const buttonsLength= buttonsCalculator.length
console.log(buttonsCalculator);
console.log(buttonsLength);


for (let i = 0; i < buttonsLength; i++) {
    buttonsCalculator[i].addEventListener("click", calcul)
    }


function calcul (event, num) {
    const value= event.target.value;
    console.log(textView);
    switch(value)
        {
        case "AC":
            document.querySelector(".textView").innerHTML = "";
            console.log("AC was clicked");
            break;
        case "+":
            console.log("+ was clicked");
            document.querySelector(".textView").innerHTML = sum(computeResult(value) + Math.floor(textView.textContent));
            break;
        case "-":
            console.log("- was clicked");
            break;
        case "*":
            console.log("* was clicked");
            break;
        case "/":
            console.log("/ was clicked");
            break;
         case "=":
            console.log("= was clicked");
            document.querySelector(".textView").innerHTML = computeResult(value);
            break;
        default:
        console.log("%s was clicked", value);
        document.querySelector(".textView").innerHTML += value;
    }
}



