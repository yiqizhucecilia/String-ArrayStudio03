let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

var foodarray=food.split(",")
foodarray.sort()
console.log(foodarray)

var equiparray=equipment.split(",")
equiparray.sort()

var petsarray=pets.split(",")
petsarray.sort()

var sleeparray=sleepAids.split(",")
sleeparray.sort()


//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold=[foodarray,equiparray,petsarray,sleeparray]

console.log(cargoHold)

cargoHold[0].includes('water bottles')



//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let number=input.question("which cabinet would you like to look at? select a numnber from 0-3")
var item=input.question ("which item would you like to check in that cabinet?")

//cargoHold[number].includes(item) this is the way to search item in the cabinet, do not have to use ""!

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.


if (number<=3 && number>=0){
  if(cargoHold[number].includes(item)==true){
  // ===type and value both equal =wont work ==will work 
  console.log("Cabinet " +number+ " DOSE contain" +item)} else
  { 
    console.log("Cabinet" +number+ "DOES NOT contain" +item)
  }
}else{console.log("please enter a valid number between 0-3")
let number=input.question("which cabinet would you like to look at? select a numnber from 0-3")}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
