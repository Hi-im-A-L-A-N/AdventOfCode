var massArray = [74767, 108567, 135114]

function fuelReq(mass){
    return Math.floor(mass / 3) - 2;
}

function fuelCalc(fuel){
    var totalFuel = 0;
    var currentFuel = fuel;

    while (currentFuel > 0){
        var fuel2 = fuelReq(currentFuel);
        if (fuel2 > 0){
            totalFuel += fuel2;
        }
        console.log(fuel2)
        currentFuel = fuel2;
    }
    return totalFuel;
}

function fuelArraySum(){
    var fuelSum = 0;
    for (index = 0; index < massArray.length; index++){
        fuelSum += fuelCalc(massArray[index]);
    }
    return fuelSum;
}



console.log(fuelArraySum())