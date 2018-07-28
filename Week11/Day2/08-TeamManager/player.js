var inquirer = require("inquirer");

function Player(name, position, offense, defense){
    this.name = name;
    this.position = position;
    this.offense = parseInt(offense);
    this.defense = parseInt(defense);

    this.goodGame = function(){
        var coinFlip = Math.floor(Math.random()*2);

        if(coinFlip === 0){
            offense += 1;
            console.log(this.name + "'s offense went up");
        }
        else if(coinFlip === 1){
            defense += 1;
            console.log(this.name + "'s defense went up");
        }
    };

    this.badGame = function(){
        if(coinFlip === 0){
            offense -= 1;
            console.log(this.name + "'s offense went down");
        }
        else if(coinFlip === 1){
            defense -= 1;
            console.log(this.name + "'s defense went down");
        }
    };

    this.printStats = function(){
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
        console.log("Offense: " + this.offense);
        console.log("Defense: " + this.defense);
        console.log("--------------------");
    };
}

var count = 0;
var score = 0;

var starterArray = [];
var subArray = [];
var teamArray = [];

function createPlayers(){
    if(count < 3){
        inquirer.prompt([
            {
                name: "name",
                message:"Enter the player's name",
                // validate: function(value){
                //     if(isNan == true){

                //     }
                // }
            },
            {
                name: "position",
                message: "Enter the player's position"
            },
            {
                name: "offense",
                message: "Enter the player's offense (1-10)"
            },
            {
                name: "defense",
                message: "Enter the player's defense (1-10)"
            }
        ]).then(function(answers){
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense
            );

            if(newPlayer.offense>10){
                newPlayer.offense = 10;
            }
            else if(newPlayer.offense<=0 || new.Player.offense === ""){
                newPlayer.offense = 1;
            }
            else if(newPlayer.defense>10){
                newPlayer.defense = 10;
            }
            else if(newPlayer.defense<=0 || new.Player.offense === ""){
                newPlayer.defense = 1;
            }

            if(count < 2){
                starterArray.push(newPlayer);
            }
            else{
                subArray.push(newPlayer);
            }

            count++;

            createPlayers();
        });
    }
    else{
        for(i=0; i<starterArray.length; i++){
            starterArray[i].printStats();
        }
        for(i=0; i<subArray.length; i++){
            subArray[i].printStats();
        }
        playGame(0);
    }
}

function playGame(roundNumber){  

    if(roundNumber < 5){
        roundNumber++;
        console.log("Round Number " + roundNumber);
        console.log("---------------");
        var opposingTeamDefense = Math.floor(Math.random()*21) + 1;
        var opposingTeamOffense = Math.floor(Math.random()*21) + 1;
    
        var currentTeamOffense = 0;
        var currentTeamDefense = 0;
    
        for(i=0; i<starterArray.length; i++){
            currentTeamOffense += starterArray[i].offense;
            currentTeamDefense += starterArray[i].defense;
        }

        console.log("Team offense: " + currentTeamOffense);
        console.log("Team Defense: " + currentTeamDefense);
        console.log("Opposing Team Offense: " + opposingTeamOffense);
        console.log("Opposing Team Defense: " + opposingTeamDefense);
    
        if(currentTeamOffense > opposingTeamDefense){
            score++;
        }
    
        if(currentTeamDefense < opposingTeamOffense){
            score--;
        }

        console.log("Your team's score: " + score);
    
        inquirer.prompt([
            {
                type: "list",
                name: "substitute",
                message:"Do you want to sub out a player?" ,
                choices: [starterArray[0], starterArray[1], "No"]
            }
        ]).then(function(answers){
            if(answers.substitute == starterArray[0]){
                var temp = starterArray[0];
                starterArray[0] = subArray[0];
                subArray[0] = temp;
            }
            playGame(roundNumber);
        });
    }
    else{
        if(score > 0){
            for(i=0; i<starterArray; i++){
                console.log("Good game");
                starterArray[i].goodGame();    
            }
        }
        else if(score < 0){
            for(i=0; i<starterArray; i++){
                console.log("Bad game");
                starterArray[i].badGame();  
            }
        }
    }
    
}

createPlayers();

