if (process.argv[2] === "add") {
    console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]));
}
else if (process.argv[2] === "subtract") {
    console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
}
else if (process.argv[2] === "multiply") {
    console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
}
else if (process.argv[2] === "divide") {
    console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
}
else if (process.argv[2] === "remainder") {
    console.log(parseFloat(process.argv[3]) % parseFloat(process.argv[4]));
}
else if (process.argv[2] === "exp") {
    console.log(Math.pow(parseFloat(process.argv[3]), parseFloat(process.argv[4])));
}
else if (process.argv[2] === "algebra") {

    outputNum = parseAlgebra(process.argv[3]);
    console.log(outputNum);
}
else{
    console.log("Please enter a valid operation");
}
// Here we take in a string expression.
// We assume input is always of the form "ax+b=c"
// And we returns the parsed result

function parseAlgebra(equation) {
    // Getting the index of x in the equation
    var xIndex = equation.indexOf("x");
    // Finding the index of the sign
    var signIndex = xIndex + 1;
    // Getting the index of the equals sign
    var equalIndex = equation.indexOf("=");
    // Getting the numerical value for the first number to appear in the equation
    var firstNum = parseInt(equation.substring(0, xIndex));
    // Getting the sign out of our equation
    var sign = equation[signIndex];
    // Getting the numerical value of the second number in the equation by grabbing the
    // piece of the equation between the operator and equals sign
    var secondNum = parseInt(equation.substring(signIndex + 1, equalIndex));
    // Getting the third number by grabbing the piece of the equation between the equals
    // sign and the end of the equation
    var thirdNum = parseInt(equation.substring(equalIndex + 1, equation.length));
    // Defining a result variable we'll use to hold our solution
    var result;

    // Performing the appropriate operation based on the sign
    if (sign === "+") {
        result = (thirdNum - secondNum) / firstNum;
    }
    else if (sign === "-") {
        result = (thirdNum + secondNum) / firstNum;
    }
    else if (sign === "*") {
        result = (thirdNum / secondNum) / firstNum;
    }
    else if (sign === "/") {
        result = (thirdNum * secondNum) / firstNum;
    }
    return result;
}