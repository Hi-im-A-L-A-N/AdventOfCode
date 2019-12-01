var fs = require('fs');
var massArray = fs.readFileSync('day1input.txt', 'utf8').split("\n").map(Number);

function fuelReq(mass){
    return Math.floor(mass / 3) - 2;
}

function fuelArraySum(){
    var fuelSum = 0;
    for (index = 0; index < massArray.length; index++){
        fuelSum += fuelReq(massArray[index]);
    }
    return fuelSum;
}

fuelArraySum()