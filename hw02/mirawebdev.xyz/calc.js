// DESIGN DECISIONS: 
// Pressing any operation after a number-operation-number combination 
// has already been entered will result in the calculator calculating the 
// operation and then waiting to perform the operation that has just been 
// clicked. An example is shown below:

// If a user enters 5 - 2 and then presses the '+ =' button, the calculator
// will produce 3 and will add the next number pressed to 3. For instance: 
// 5 - 2 + 3 [operation] will output 5. This is also the case with buttons other
// than the '+ =' button. The only operation that does not do this is 'c', 
// because 'c' clears the calculator

// I also made the design decision that if a user presses multiple operation
// buttons in a row, the calculator will accept the last operation pressed

var currentNum = 0;
var storedNum = 0;
var operation = '';
var opJustClicked = 0;

const numberClicked = function(clicked) {               // when number is clicked
    "use strict";
    opJustClicked = 0;                                  // sets opJustClicked to false
    if (currentNum == 0) {                              // sets currentNum to clicked if currentNum = 0
        currentNum = clicked;
    } else if (currentNum.toString().length <= 16) {    // concatenates new number with currentNum
        currentNum = currentNum + clicked;
    }
    document.getElementById("display").innerHTML = currentNum;

    window.addEventListener('load', init, false);

}

const operationClicked = function(clicked) {            // when operation is clicked
    "use strict";
    currentNum = parseFloat(currentNum, 10);
    if (opJustClicked == 1) {                           // correct mistake if wrong operation is pressed
        operation = clicked;
    } else if (operation == '') {                       // if a user has not yet selected an operation
        storedNum = currentNum;
        currentNum = 0;
        operation = clicked;
    } else {                                            // if an operation has already been selected (where 

        if (operation == '+ =') {                       // the calculation of an operation happens)
            storedNum = storedNum + currentNum;
        } else if (operation == '-') {
            storedNum = storedNum - currentNum;
        } else if (operation == 'x') {
            storedNum = storedNum * currentNum;
        } else if (operation == '/') {
            storedNum = storedNum / currentNum;
        }
        currentNum = 0;
        operation = clicked;
        opJustClicked = 1;
        document.getElementById("display").innerHTML = storedNum;
    }

    window.addEventListener('load', init, false);
}

const reset = function() {                              // resets calculator
    "use strict";
    currentNum = 0;
    storedNum = 0;
    operation = '';
    opJustClicked = 0;
    document.getElementById("display").innerHTML = '';

    window.addEventListener('load', init, false);
}
