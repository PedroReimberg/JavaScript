// URL = https://exercism.org/tracks/javascript/exercises/vehicle-purchase/solutions/pedroreimberg

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    return (kind == "car" || kind == "truck")
}
/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
    let recommended = option1 > option2 ? option2 : option1;
    return recommended + " is clearly the better choice."
}
/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    // If the vehicle is less than 3 years old, it costs 80% of the original price.
    if (age < 3) originalPrice *= 0.8;
    // If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.
    else if (age <= 10) originalPrice *= 0.7;
    // If it is more than 10 years old, it costs 50%.
    else originalPrice *= 0.5;
    return originalPrice
}