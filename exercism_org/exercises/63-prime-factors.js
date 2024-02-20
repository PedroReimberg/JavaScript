// URL = https://exercism.org/tracks/javascript/exercises/prime-factors/solutions/pedroreimberg

//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {
    let factor = 2;
    let factors = [];

    if (number == 1) return factors

    while (number != 1) {
        while (number % factor == 0) {
            number = number / factor
            factors.push(factor)
        }
        factor++
    }
    return factors
};

