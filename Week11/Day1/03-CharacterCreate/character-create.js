function Character(name, profession, gender, age, strength, hitPoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = parseInt(age);
    this.strength = parseInt(strength);
    this.hitPoints = parseInt(hitPoints);

    this.printStats = function(){
        console.log("Name: " + this.name);
        console.log("Profession: " + this.profession);
        console.log("Gender: " + this.gender);
        console.log("Age: " + this.age);
        console.log("Stength: " + this.strength);
        console.log("Hit Points: " + this.hitPoints);
    };

    this.isAlive = function(){
        if(this.hitPoints > 0){
            console.log(this.name + " is still alive!");
        }
        else{
            this.hitPoints = 0;
            console.log(this.name + " is dead. RIP");
        }
    };

    this.attack = function(defender){
        defender.hitPoints -= this.strength;
        console.log(this.name + " attacked " + defender.name + " for " + this.strength + " points of damage!");
        defender.isAlive();
    };

    this.levelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;

        console.log(this.name + " leveled up!");
    }
};

function printCharacterStats(){
    console.log("\n");
    tom.printStats();
    console.log("\n");
    jerry.printStats();
    console.log("\n");
};

var tom = new Character("Tom", "Cat", "Male", 8, 10, 10);

var jerry = new Character("Jerry", "Mouse", "Male", 3, 100, 1000);

printCharacterStats();

tom.attack(jerry);
tom.levelUp();

printCharacterStats();

jerry.attack(tom);
jerry.levelUp();

printCharacterStats();




