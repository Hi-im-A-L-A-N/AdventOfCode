const fs = require('fs');
const massArray = fs.readFileSync('day1input.txt', 'utf8').split("\n").map(Number);

function fuelReq(mass){
    return Math.floor(mass / 3) - 2;
}

function fuelCalc(fuel){
    let totalFuel = 0;
    let currentFuel = fuel;

    while (currentFuel > 0){
        let fuel2 = fuelReq(currentFuel);
        if (fuel2 > 0){
            totalFuel += fuel2;
        }
        currentFuel = fuel2;
    }
    return totalFuel;
}

function fuelArraySum(){
    let fuelSum = 0;
    for (var value of massArray){
        fuelSum += fuelCalc(value);
    }
    return fuelSum;
}



console.log(fuelArraySum())