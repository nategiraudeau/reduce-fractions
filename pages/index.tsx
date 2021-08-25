import React, { useState } from 'react';

import reduceFraction from '../reduceFraction';

const _: React.FC = () => {
    const [numerator, setNumerator] = useState<number | undefined>(4);
    const [denominator, setDenominator] = useState<number | undefined>(8);

    function handleChangeNumerator(v: string) {
        const value = Number.parseInt(v);

        if (value && !isNaN(value)) {
            setNumerator(value);
        } else {
            setNumerator(undefined);
        }
    }

    function handleChangeDenominator(v: string) {
        const value = Number.parseInt(v);

        if (value && !isNaN(value)) {
            setDenominator(value);
        } else {
            setDenominator(undefined);
        }
    }

    return (
        <div className="App">
            <div className="background-triangle"></div>
            <div className="form">
                <h1>Reduce <br /> Fractions</h1>
                <div className="inputs">
                    <input value={numerator} onChange={(e) => handleChangeNumerator(e.target.value)} />
                    <hr style={{ opacity: '0', }} className="fraction-divider"></hr>
                    <input value={denominator} onChange={(e) => handleChangeDenominator(e.target.value)} />
                    <button onClick={() => {
                        const fraction = reduceFraction(numerator, denominator);
                        setNumerator(fraction[0]);
                        setDenominator(fraction[1]);
                    }}>Reduce</button></div>
            </div>
        </div>
    );
}

export default _;