import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import * as Icons from 'react-feather';

import reduceFraction from '../reduceFraction';

const _: React.FC = () => {
    const [numerator, setNumerator] = useState<number | undefined>(4);
    const [denominator, setDenominator] = useState<number | undefined>(8);
    const [newFraction, setNewFraction] = useState<[number, number]>([1, 1]);
    const [animate, setAnimate] = useState(false);

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
        <div className={`_app${animate ? ' animate' : ''}`}>
            <div className="circle-green"></div>
            <div className="circle-yellow"></div>
            <div className="header">
                <h1>Reduce <br /> Fractions </h1>
                <div>
                    <a href="https://github.com/nategiraudeau/reduce-fractions" rel="noopener noreferrer" target="_blank" className="github">
                        <Icons.ArrowRight opacity={0.3} size={18} />
                        <FontAwesomeIcon width={20} icon={faGithub} />
                        <h4>nategiraudeau/reduce-fractions</h4>
                    </a>
                </div>
            </div>
            <div className="form">
                <div className="inputs-container">
                    <div className="inputs">
                        <input value={numerator} onChange={(e) => handleChangeNumerator(e.target.value)} />
                        <input value={denominator} onChange={(e) => handleChangeDenominator(e.target.value)} />
                    </div>
                    <div className="inputs-new">
                        <input value={newFraction[0]} />
                        <input value={newFraction[1]} />
                    </div>
                </div>
                <button onClick={async () => {
                    if (!animate && denominator !== 0) {
                        const fraction = reduceFraction(numerator, denominator);
                        if (numerator === fraction[0] && denominator === fraction[1]) {
                            return;
                        }
                        setNewFraction(fraction);
                        setAnimate(true);
                        await new Promise((resolve, reject) => {
                            setTimeout(resolve, 600);
                        });
                        setNumerator(fraction[0]);
                        setDenominator(fraction[1]);
                        setAnimate(false);
                    }
                }}><Icons.ArrowRight size={18} visibility="hidden" /> <span className="label">Reduce</span> <span className="icon"><Icons.ArrowRight strokeWidth={2.5} size={18} /></span></button>
            </div>
        </div>
    );
}

export default _;
