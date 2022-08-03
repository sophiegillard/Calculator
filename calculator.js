var calculatorDiv = document.querySelector('.calculator');
let calculatorScreen= document.createElement('section');
let calculatorBoard= document.createElement('section');
calculatorBoard.className='calculator__board';
calculatorScreen.className='calculator__screen';
calculatorDiv.appendChild(calculatorScreen);
calculatorDiv.appendChild(calculatorBoard);
console.log(calculatorDiv)

//CALCULATOR SCREEN
    //DIV for the numbers
var calculDiv= document.createElement('div');
calculDiv.className='calculDiv';
calculatorScreen.appendChild(calculDiv);
calculDiv.setAttribute('type', 'text');

    //create span for the history
var textView= document.createElement('span');
textView.className='textView';
calculDiv.appendChild(textView);
textView.setAttribute('type', 'text');

    //create span for the history
var textResult= document.createElement('span');
textResult.className='textResult';
calculDiv.appendChild(textResult);
textResult.setAttribute('type', 'text');

    //create span for the history
var textHistory= document.createElement('span');
textHistory.className='textHistory';
calculatorScreen.appendChild(textHistory);
textHistory.setAttribute('type', 'text');
       //create LIST for the history
       var listHistory= document.createElement('ul');
        listHistory.className='textHistoryUl';
        textHistory.appendChild(listHistory);

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


//BEGINNING of the functional aspect

//Display the numbers and operators on the screen
let buttonsCalculator = document.querySelectorAll("input[type=button]");
const buttonsLength= buttonsCalculator.length
console.log(buttonsCalculator);
console.log(buttonsLength);
let calculScreen =  document.querySelector(".textView");
let resultScreen =  document.querySelector(".textResult");

// adding the event CLick to all buttons
for (let i = 0; i < buttonsLength; i++) {
    buttonsCalculator[i].addEventListener("click", calcul)
    }

// function to calculate the strings
function computeResult(str){
    return Function('return ' + str)()
    }

 //Function to display to history of the operations in the calculator
function history(num){
    var listItem = document.createElement('li');
    listItem.className = "historyItem";
    listHistory.appendChild(listItem);
    const histText = document.createTextNode(num + " = " + computeResult(num));
    listItem.appendChild(histText);
    console.log(listItem);
}
    
function calcul (event) {
    const value= event.target.value;
    console.log(textView);
    switch(value)
        {
        case "AC":
            calculScreen.innerHTML = "";
            resultScreen.innerHTML = "";
            break;
         case "=":
            console.log("= was clicked");
            let num = textView.innerHTML;
            console.log(num);
            history(num);
            resultScreen.innerHTML = "=" + computeResult(num);
            var total = "=" + computeResult(num);
            break;
        case "%":
            calculScreen.innerHTML = '('+calculScreen.innerHTML+'/100'+')'+'*'; 
        break;
        default:
        console.log("%s was clicked", value);
        calculScreen.innerHTML += value;
        break;
    }
}

// FUNCTION TO DELETE THE LAST DIGIT INSERTED

document.body.addEventListener("keyup", deleteLastDigit =>{
    if (deleteLastDigit.code ==='Backspace'){
        let deletedigit = calculScreen.innerHTML;
        calculScreen.innerHTML = deletedigit.slice (0, -1);
    }
})

// PRESSING NUMBERS TO DISPLAY DIGITS
// for (let i = 0; i < buttonsLength; i++) {
//     document.body.addEventListener("keyup", pressKeys =>{
//         if (pressKeys.key ===[i]){
//             calcul()        }
//     })
// }

// PRESSING ENTER TO ACT LIKE EQUAL
