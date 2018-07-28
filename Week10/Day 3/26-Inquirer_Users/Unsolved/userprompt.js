// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "password",
        message: "Set your password",
        name: "password"
    },
    {
        type: "list",
        message: "Which DCU movie do you think is the best?",
        choices: ["None of them", "None of them", "Wonder Woman, I guess", "None of them"],
        name: "dcuquestion"
    },
    {
        type: "checkbox",
        message: "Do you prefer dogs or cats?",
        choices: ["Dogs", "Cats"],
        name: "dogcatpreference"
    },
    {
        type: "confirm",
        message: "Do you want your answers displayed back to you?",
        name: "confirmdisplay",
        default: true
    },
    // {
    //     type: "password",
    //     message: "Please re-enter your password",
    //     name: "validatepassword"
    // }
]).then(function(inquirerResponse){
    console.log(inquirerResponse.password);
    if(inquirerResponse.password === "knights90" && inquirerResponse.confirmdisplay){
        console.log("\nUsername: " + inquirerResponse.username);
        console.log("Your password: " + inquirerResponse.password);
        console.log("Your favorite DCU movie: " + inquirerResponse.dcuquestion);
        console.log("Your dog/cat preference: " + inquirerResponse.dogcatpreference);
    }
    else if(inquirerResponse.password === "knights90" && !inquirerResponse.confirmdisplay){
        console.log("Thank you. Goodbye");
    }
    else{
        console.log("Error: Incorrect password");
    }
});