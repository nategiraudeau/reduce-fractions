import React, { Component } from 'react';

import reduceFraction from '../reduceFraction';

import '../form.css';

export default class ReduceFractions extends Component {

    state = {
        numerator: 4,
        denominator: 8
    }

    handleChangeNumerator(v) {
        const value = Number.parseInt(v);

        if (value && !isNaN(value)) {
            this.setState({
                numerator: value,
            });
        } else {
            this.setState({
                numerator: "",
            });
        }
    }

    handleChangeDenominator(v) {
        const value = Number.parseInt(v);

        if (value && !isNaN(value)) {
            this.setState({
                denominator: value,
            });
        } else {
            this.setState({
                denominator: "",
            });
        }
    }

    render() {

        const { numerator, denominator } = this.state;

        return (
            <div className="form">
                <h1>Reduce <br /> Fractions</h1>
                <div className="inputs">
                    <input value={numerator} onChange={(e) => this.handleChangeNumerator(e.target.value)} />
                    <hr style={{ opacity: '0', }} className="fraction-divider"></hr>
                    <input value={denominator} onChange={(e) => this.handleChangeDenominator(e.target.value)} />
                    <button onClick={() => {
                        const fraction = reduceFraction(numerator, denominator);

                        this.setState({
                            numerator: fraction[0],
                            denominator: fraction[1],
                        });
                    }}>Reduce</button></div>
            </div>
        )
    }
}
