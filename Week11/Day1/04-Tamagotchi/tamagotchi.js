var inquirer = require("inquirer");

function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks! I'm full.");
        }
    };

    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
            console.log("No way! I'm not tired.");
        }
    };

    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("Not right now. Later?");
        }
    };

    this.increaseAge = function () {
        this.age++;
        console.log("Happy birthday to me! I am " + this.age + "old");
    }
};

var dog = new DigitalPal();

dog.outside = false;

dog.bark = function () {
    console.log("Woof! Woof!");
};

dog.goOutside = function () {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
    }
    else {
        console.log("We're already outside though...");
    }
};

dog.goInside = function () {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    }
    else {
        console.log("I'm already inside...");
    }
};

var cat = new DigitalPal();

cat.houseCondition = 100;

cat.meow = function () {
    console.log("Meow! Meow!");
};

cat.destroyFurniture = function () {
    if (this.houseCondition !== 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! Take that furniture!");
        console.log("Furniture is at " + this.houseCondition + " health.");
        this.bored = false;
        this.sleepy = true;
    }
    else {
        console.log("Your furniture is dead. You need to buy more furniture");
    }
};

cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure?");
};

var animal = process.argv[2];

var action = process.argv[3];

function prompt(){
    inquirer.prompt([
        {
            type: "input",
            message: "Dog, Cat, or Quit?",
            name: "option"
        }
    ]).then(function(inquirerResponse){
        if (inquirerResponse.option === "dog") {
            inquirer.prompt([{

            }]).then(function(inquirerResponse){
                switch (inquirerResponse) {
                    case "feed":
                        dog.feed();
                        break;
                    case "sleep":
                        dog.sleep();
                        break;
                    case "play":
                        dog.play();
                        break;
                    case "bark":
                        dog.bark();
                        break;
                    case "outside":
                        dog.outside();
                        break;
                    case "inside":
                        dog.inside();
                        break;
                    default:
                        console.log("Error: please enter a valid action");
                        break;
                }
            });
            
        }
        else if (animal === "cat") {
            switch (action) {
                case "feed":
                    cat.feed();
                    break;
                case "sleep":
                    cat.sleep();
                    break;
                case "play":
                    cat.play();
                    break;
                case "meow":
                    cat.meow();
                    break;
                case "destroy-furniture":
                    cat.destroyFurniture();
                    break;
                case "buy-furniture":
                    cat.buyNewFurniture();
                    break;
                case "quit":
                    appRunning = false;
                default:
                    console.log("Error: please enter a valid action");
                    break;
            }
        }
    });
    
}



