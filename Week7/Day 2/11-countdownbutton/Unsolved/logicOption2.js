// Initialize Firebase (YOUR OWN APP)

var config = {
  apiKey: "AIzaSyC5HFBeQ0bKwQdS3PdcpAu9Fth9C6PTREI",
  authDomain: "countdown-button-ecaee.firebaseapp.com",
  databaseURL: "https://countdown-button-ecaee.firebaseio.com",
  projectId: "countdown-button-ecaee",
  storageBucket: "",
  messagingSenderId: "1031391562771"
};
firebase.initializeApp(config);

var database = firebase.database();

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot){

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Change the clickCounter to match the data in the database
  clickCounter = snapshot.val().clickCount;

  // Log the value of the clickCounter
  console.log(clickCounter);

  // Change the HTML Value
  $("#click-value").text(snapshot.val().clickCount);
  },
  // If any errors are experienced, log them to console.
  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;


  // Alert User and reset the counter
  if(clickCounter === 0){
    alert("That's enough clicking for today");
    clickCounter = initialValue;
  }


  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });



  // Log the value of clickCounter
  console.log(clickCounter);
  
});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);


  // Change the HTML Values
  $("#click-value").text(clickCounter);

});
