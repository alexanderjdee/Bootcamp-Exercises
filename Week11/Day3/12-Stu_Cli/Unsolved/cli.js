// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

if(!command){
    command = "show";
}

if(!search){
    search = "Andy Griffith";
}

switch(command){
    case "show":
        console.log("show");
        console.log(search);
        break;
    case "actor":
        console.log("actor");
        console.log(search);
        break;
    default:
        console.log("invalid command");
        break;

}