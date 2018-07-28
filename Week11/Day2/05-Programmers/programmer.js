function Programmer(name, position, age, language){
  this.name = name;
  this.position = position;
  this.age = parseInt(age);
  this.language = language;
  
  this.printInfo = function(){
    console.log("Name: " + this.name);
    console.log("Position: " + this.position);
    console.log("Age: " + this.age);
    console.log("Preferred Programming Language: " + this.language);
  };
}

var programmerDude = new Programmer("Bob", "Build Engineer", 33, "Groovy");

programmerDude.printInfo();