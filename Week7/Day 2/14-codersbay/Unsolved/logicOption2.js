// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBO05pAtv82xTmR6cH341Vx_lTQOSZxfj0",
    authDomain: "coders-bay-9480f.firebaseapp.com",
    databaseURL: "https://coders-bay-9480f.firebaseio.com",
    projectId: "coders-bay-9480f",
    storageBucket: "",
    messagingSenderId: "313341233875"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot){

    // If Firebase has a highPrice and highBidder stored (first case)
    if(snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()){

        // Set the variables for highBidder/highPrice equal to the stored values in firebase.
        // highPrice = ...
        // highBidder = ...
        highPrice = snapshot.val().highPrice;
        highBidder = snapshot.val().highBidder;
    }

    // Change the HTML to reflect the stored values
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);


    // Print the data to the console.
    console.log(highBidder);
    console.log(highPrice);
},function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});



// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event){

    // prevent form from submitting with event.preventDefault() or returning false
    event.preventDefault();

    // Get the input values
    var bidder = $("#bidder-name").val().trim();
    var bidderPrice = $("#bidder-price").val().trim();

    // Log the Bidder and Price (Even if not the highest)
    console.log(bidder);
    console.log(bidderPrice);

    // If Then statements to compare against previous high bidder
    if(bidderPrice > highPrice){

        // Alert that they are High Bidder
        alert("You are now the highest bidder.");

        // Save the new price in Firebase
        database.ref().set({
            highBidder: bidder,
            highPrice: bidderPrice
        });

        // Log the new High Price
        console.log(highPrice);
    }
    // Else tell user their bid was too low via alert
    else{
        alert("Sorry that bid is too low. Try again.");
    }

});