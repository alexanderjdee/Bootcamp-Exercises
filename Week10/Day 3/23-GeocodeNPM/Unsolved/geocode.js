// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require ("geocoder");



// Take in the command line arguments
var nodeArgs = process.argv;


// Build your address as an array or string
var address = "";

for(i=2; i<nodeArgs.length; i++){
    address = address + " " + nodeArgs[i];
}

console.log("Searching for" + address);

// Then use Geocoder NPM to geocode the address
geocoder.geocode(address, function(error, result){
    if(error){
        console.log(error);
    }

    console.log(JSON.stringify(result, null, 2));
});
