/**
 * Challenge #1
 * Create a method to convert fahrenheit to celsius
 * The conversion formula is: (fahrenheit - 32) * (5/9)
 */

const fahrenheitToCelsius = temperature => {
    let fahrenheit = temperature;
    let conversion = (temperature - 32) * (5 / 9);
    return console.log(`${fahrenheit} fahrenheit is ${conversion} celsius`);
}

fahrenheitToCelsius(45);

/**
 * Challenge #2
 * Create a method to convert celsius to fahrenheit 
 * The conversion formula is: celsius * 9/5 + 32
 */

const celsiusToFahrenheit = temperature => {
    let celsius = temperature;
    let conversion = temperature * 9 / 5 + 32;
    return console.log(`${celsius} celsius is ${conversion} fahrenheit`);
}

celsiusToFahrenheit(60);

/**
 * Challenge #3
 * Create a method to convert miles to kilometers 
 * 1 mile = 1.609344 km
 */

const milesToKilometers = mile => {
    let miles = mile;
    let conversion = mile * 1.6;
    return console.log(`${miles} miles is ${conversion} kilometers`);
}

milesToKilometers(60);

/**
 * Challenge #4
 * Create a method to convert kilometers to miles 
 * 1 km = 0.621371 miles
 */

const kilometersToMiles = kilometers => {
    let kilometer = kilometers;
    let conversion = kilometers / 1.6;
    return console.log(`${kilometers} kilometers is ${conversion} miles`);
}

kilometersToMiles(60);

/**
OUTPUT
*******************************************
45 fahrenheit is 7.222222222222222 celsius
60 celsius is 140 fahrenheit
60 miles is 96 kilometers
60 kilometers is 37.5 miles
*******************************************
 */