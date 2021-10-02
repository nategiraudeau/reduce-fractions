## Reduce Fractions

A web app built with [NextJS](https://github.com/vercel/next.js) that reduces fractions.

---

[Reduce a fraction &#8594;](http://reduce-fractions.vercel.app)

---

<img 
    style="
        max-width: 500px;
        box-shadow: -4px 5px 0px rgba(0, 0, 0, 0.07);
        border-radius: 16px;
        width: 100%;" 
    src="./screen-recording.gif" 
    alt="A screen recording of the app"/>
    
---

## Reduce Fractions Method (Typescript):

```ts
function reduceFraction(numerator: number, denominator: number): [number, number] {
    function gcd(a: number, b: number): number {
        return b ? gcd(b, a % b) : a;
    };

    let _gcd = gcd(numerator, denominator);

    return [numerator / _gcd, denominator / _gcd];
}
```
