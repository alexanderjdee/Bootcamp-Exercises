var fs = require("fs");

function otherFunction(value){
    console.log("Function value: " + value);
}

// Write a function that logs a message, then executes
// a function argument.
function logBefore(func, message){
    func(message);
}

// Write a function that runs a function argument if
// its other argument is truthy.

function runIf(func, bool){
    if(bool){
        func(bool);
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

var wrap = function (func, value){
    return function(){
        return func(value);
    }
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

fs.writeFile("log.txt", "Wrote to file", function(error){
    if(error) throw error;
});


logBefore(otherFunction, "Log Before");

runIf(otherFunction, true);

console.log(wrap);
