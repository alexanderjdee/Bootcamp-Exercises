//GLOBAL VARIABLES
$(document).ready(function(){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
//OBJECTS

var game = {
    wordChoices: ["nutella", "taylor", "princess", "fallout", "spongebob", "duck"],
    word: "",
    blankWord: "",
    wins: null,
    losses: null,
    wrongGuess: null,

    setUpGame: function(){
        this.chooseWord();
    },

    chooseWord: function(){
        this.word = this.wordChoices[Math.floor(Math.random() * this.wordChoices.length)];
        console.log(this.word);
        for(var i=0; i<this.word.length; i++){
            this.blankWord += " _ ";
            $(".blank").text(this.blankWord);
        }
        console.log(this.blankWord);
        
    }


}

//FUNCTIONS



//LOGIC

game.setUpGame();




      // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
      // =================================================================================

      // 1. Create a for-loop to iterate through the letters array.
      for(var i = 0; i < letters.length; i++){
      // Inside the loop...

      // 2. Create a variable named "letterBtn" equal to $("<button>");
        var letterBtn = $("<button>");
      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn.addClass("letter-button letter letter-button-color");    
      // 4. Then give each "letterBtn" an attribute called "data-letter", with a value equal to "letters[i]"
        letterBtn.attr("data-letter", letters[i]);    
      // 5. Then give each "letterBtn" a text equal to "letters[i]".
        letterBtn.text(letters[i]);
      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#buttons").append(letterBtn);
      // Be sure to test that your code works for this major task, before proceeding to the next one!
      }
      // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
      // =================================================================================

      // 7. Create an "on-click" event attached to the ".letter-button" class.
    $(".letter-button").on("click", function(){
        for(i=0; i<game.word.length; i++){
            if($(this).data("letter")) === game.word.charAt(i){

            }
        }
        
    }



});