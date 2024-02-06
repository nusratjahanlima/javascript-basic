//12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'feet' + inchRemaining + 'inch';
    return result;
}

const findHeight = inchToFeet(75);
console.log(findHeight);
const findHeight2 = inchToFeet2(75);
console.log(findHeight2);


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const convertMileToKilo = mileToKilometer(1);
console.log(convertMileToKilo);

function KilometerToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

const convertKiloToMile = KilometerToMiles(1);
console.log(convertKiloToMile);

