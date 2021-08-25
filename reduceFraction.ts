export default function reduceFraction(numerator: number, denominator: number): [number, number] {
    function gcd(a: number, b: number): number {
        return b ? gcd(b, a % b) : a;
    };

    let _gcd = gcd(numerator, denominator);

    return [numerator / _gcd, denominator / _gcd];
}