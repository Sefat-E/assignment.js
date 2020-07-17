//number 1 : 
function feetToMile(feet) {
    var mile =  0.000189394*feet;
    return mile;
    
}
var result = feetToMile(2);
console.log(result);

//number 2 :

function woodCalculator(c, t, b) {
    var chair = 1*c;
    var table = 3*t;
    var bed = 5*b;
    var neededCubicFeet = chair + table  + bed ;
    if (neededCubicFeet <= 0){
        neededCubicFeet = " Please Enter Positive Value ";

    }
    return neededCubicFeet;
  }
  
  console.log(woodCalculator( 0, -1, -1));
  console.log(woodCalculator(4, 4, 1));



  //number 3 
function brickCalculator(floor){
    var PerFeetBrick = 1000;
    var totalBrick = PerFeetBrick * floor;
    if(floor <= 0 ){
      totalBrick = "Please Enter Poitive Integers Value";
  
    } else if (floor <= 10 ){
      totalBrick = 15*PerFeetBrick*floor;
    } else if ( floor <=20 ) {
      totalBrick = 12*PerFeetBrick*floor;
    } else if ( floor > 20 ) {
      totalBrick = 10*PerFeetBrick*floor;
    }
   return totalBrick;
  }
  console.log(brickCalculator(10));


  //number 4 : 

  function tinyFriend(names) {
    var smallestName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentNumber = names[i];
        if (currentNumber < smallestName) {
            smallestName = currentNumber;
        }
        
    }
    return smallestName;
}
var friend = ["Sefat", "E", "Mun", "Jaleen"];
var result = tinyFriend(friend);
console.log(result);
