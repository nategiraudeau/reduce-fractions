
/**
 * Takes a fraction and returns it reduced.
 * 
 * @param {number} numerator 
 * @param {number} denominator 
 */

export default function reduceFraction(numerator, denominator) {

    // Recursive method for finding the greatest common denominator.
    let gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };

    gcd = gcd(numerator, denominator);

    return [numerator / gcd, denominator / gcd];
}